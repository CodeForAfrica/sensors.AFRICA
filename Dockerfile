ARG \
  NODE_ENV=production \
  # Next.js collects completely anonymous telemetry data about general usage.
  # Learn more here: https://nextjs.org/telemetry
  NEXT_TELEMETRY_DISABLED=1

# ============================================================================
#  Node
# ============================================================================

FROM node:20.14-alpine AS node

# Always install security updated e.g. https://pythonspeed.com/articles/security-updates-in-docker/
# Update local cache so that other stages don't need to update cache
RUN apk update \
    && apk upgrade

# ============================================================================
#  Node
# ============================================================================
#
FROM node AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 600000

# ============================================================================
#  Builder
# ============================================================================

# Rebuild the source code only when needed
FROM node AS builder

ARG \
  NEXT_PUBLIC_APP_API_BASE_URL="http://localhost:8000/v2" \
  NEXT_PUBLIC_APP_API_DOCS_URL="https://localhost:8000/docs" \
  NEXT_PUBLIC_APP_API_STATIC_URL="http://localhost:8000/static/v2" \
  NEXT_PUBLIC_APP_MAP_URL="https://v2.map.aq.sensors.africa/" \
  NEXT_TELEMETRY_DISABLED=1 \
  NODE_ENV="production"

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_TELEMETRY_DISABLED
ENV NEXT_TELEMETRY_DISABLED=${NEXT_TELEMETRY_DISABLED}

RUN yarn build

# ============================================================================
#  Runner
# ============================================================================

# Production image, copy all the files and run next
FROM node AS runner

ARG NEXT_TELEMETRY_DISABLED \
    NODE_ENV
ENV NEXT_TELEMETRY_DISABLED={NEXT_TELEMETRY_DISABLED} \
    NODE_ENV=${NODE_ENV}

WORKDIR /app

RUN set -ex \
  # Create a non-root user
  && addgroup --system -g 1001 nodejs \
  && adduser --system -u 1001 -g 1001 nextjs \
  # Set the correct permission for prerender cache
  && mkdir .next \
  && chown nextjs:nodejs .next \
  # Delete system cached files we don't need anymore
  && rm -rf /var/cache/apk/*

COPY --from=builder /app/public ./public

# Automatically leverage output traces to reduce image size 
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD ["HOSTNAME='0.0.0.0'", "node", "server.js"]

module.exports = {
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: process.env.NEXT_PUBLIC_IMAGE_DOMAINS?.split(",")
      ?.map((d) => d.trim())
      ?.filter((d) => d.trim()),
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        "@svgr/webpack",
        {
          loader: "svg-url-loader",
          options: {},
        },
      ],
    });
    return config;
  },
};

import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

import { GA_TRACKING_ID } from "@/sensorsafrica/lib/gtag";
import theme from "@/sensorsafrica/theme";

export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            href="https://fonts.googleapis.com/css?family=Anton|Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
            rel="preconnect"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anton|Montserrat:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());

              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname
              });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MainDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

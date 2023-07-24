import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const CONTENT = {
  black: {
    hex: "#424143",
    version: "Ewqar9pC28",
  },
  blue: {
    hex: "#4972b8",
    version: "8wB2COTulV",
  },
  green: {
    hex: "#2fb56b",
    version: "78bppvKdQd",
  },
  orange: {
    hex: "#F57C00",
    version: "WxbPiUQG57",
  },
  purple: {
    hex: "#b64598",
    version: "WxbPiUQG57",
  },
};

/**
  manifest.json provides metadata used when your web app is added to the
  homescreen on Android.
  See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
*/
function Favicon({ color, version }) {
  const { hex, version: defaultVersion } = CONTENT[color];
  const v = version || defaultVersion;

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/favicons/${color}/apple-touch-icon.png?v=${v}`}
        key="favicon-apple-touch"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/favicons/${color}/favicon-32x32.png?v=${v}`}
        key="favicon-32x32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/favicons/${color}/favicon-16x16.png?v=${v}`}
        key="favicon-16x16"
      />
      <link
        rel="mask-icon"
        color={hex}
        href={`/favicons/${color}/safari-pinned-tab.svg?v=${v}`}
        key="favicon-mask-icon"
      />
      <link
        rel="manifest"
        href={`/favicons/${color}/manifest.json?v=${v}`}
        key="favicon-manifest"
      />
      <meta
        property="apple-mobile-web-app-title"
        content="sensors.AFRICA"
        key="favicon-meta-apple-mobile-web-app-title"
      />
      <meta
        property="application-name"
        content="sensors.AFRICA"
        key="favicon-meta-application-name"
      />
      <meta
        property="msapplication-TileColor"
        content={hex}
        key="favicon-meta-msapplication-tilecolor"
      />
      <meta
        property="msapplication-config"
        content={`/favicons/${color}/browserconfig.xml?v=${v}`}
        key="favicon-meta-msapplication-config"
      />
    </Head>
  );
}

Favicon.propTypes = {
  color: PropTypes.string,
  version: PropTypes.string,
};

Favicon.defaultProps = {
  color: "black",
  version: null,
};

export default Favicon;

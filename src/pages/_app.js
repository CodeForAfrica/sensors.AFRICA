import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "next/app";
import Router from "next/router";
import React from "react";

import "@/sensorsafrica/assets/css/index.css";
import "@/sensorsafrica/assets/css/App.css";

import * as gtag from "@/sensorsafrica/lib/gtag";
import theme from "@/sensorsafrica/theme";

library.add(fab, faSearch);

Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));

export default class MainApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

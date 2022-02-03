import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { useRouter } from "next/router";
import React from "react";

import backgroundImage from "@/sensorsafrica/assets/images/background/bgsupport.jpg";
import DocumentHead, { URLS } from "@/sensorsafrica/components/DocumentHead";
import Footer from "@/sensorsafrica/components/Footer/index";
import Navbar from "@/sensorsafrica/components/Header/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    backgroundImage: `url(${backgroundImage.src})`,
  },
  bodyCopy: {
    margin: "8rem",
    textAlign: "center",
  },
  button: {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: "1rem",
    "& .button-icon": {
      display: "none",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: "#fff",
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    "&:hover .button-icon": {
      display: "inline-block",
    },
  },
  buttonIcon: {
    marginRight: "0.5rem",
  },
  typography: {
    color: "white",
  },
}));

function NotFound(props) {
  const classes = useStyles(props);
  const router = useRouter();

  const handleBack = () => {
    // For security and privacy reasons, browsers don't allow JS to view
    // visited URLs. We'll use document.referrer for approximation
    // @see: https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer
    const previous = document.referrer;
    if (previous) {
      const { location } = window;
      if (!location.origin) {
        location.origin = `${location.protocol}//${location.host}`;
      }
      if (previous.startsWith(location.origin)) {
        return router.back();
      }
    }
    return router.push("/");
  };

  return (
    <Grid container className={classes.root}>
      <DocumentHead url={URLS.NOT_FOUND} />
      <Navbar />
      <Grid
        item
        xs={12}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.bodyCopy}
      >
        <Typography variant="h1" className={classes.typography}>
          404
        </Typography>
        <Typography variant="h5" className={classes.typography}>
          OOPS! WE CAN&apos;T SEEM TO FIND THE PAGE YOU ARE LOOKING FOR.
        </Typography>

        <Typography variant="h5">
          <Button
            color="secondary"
            onClick={handleBack}
            className={classes.button}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              clsx={clsx(classes.buttonIcon, "button-icon")}
            />
            GO BACK
          </Button>
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default NotFound;

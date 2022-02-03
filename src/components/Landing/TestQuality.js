import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import air from "@/sensorsafrica/assets/images/button/airbtn.png";
import radiation from "@/sensorsafrica/assets/images/button/radiationbtn.png";
import sound from "@/sensorsafrica/assets/images/button/soundbtn.png";
import water from "@/sensorsafrica/assets/images/button/waterbtn.png";
import ComingSoon from "@/sensorsafrica/components/ComingSoon";
import ButtonLink from "@/sensorsafrica/components/Link/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    paddingTop: "2rem",
  },
  img: {
    height: "5.5rem",
    width: "auto",
    margin: "3rem auto",
    [theme.breakpoints.up("md")]: {
      height: "12.5rem",
      margin: "0 auto",
      padding: "3rem",
    },
  },
  airCard: {
    backgroundColor: theme.palette.primary.light,
    height: "12.5rem",
    width: "10.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      width: "15.625rem",
    },
  },
  waterCard: {
    backgroundColor: "#4972B8",
    height: "12.5rem",
    width: "10.5rem",
    [theme.breakpoints.up("md")]: {
      width: "15.625rem",
    },
  },
  soundCard: {
    backgroundColor: "#B64598",
    height: "12.5rem",
    width: "10.5rem",
    [theme.breakpoints.up("md")]: {
      width: "15.625rem",
    },
  },
  radiationCard: {
    backgroundColor: "#F57C00",
    height: "12.5rem",
    width: "10.5rem",
    [theme.breakpoints.up("md")]: {
      width: "15.625rem",
    },
  },
  testTitle: {
    color: "white",
    paddingTop: "2rem",
    fontSize: "1rem",
    fontFamily: theme.typography.h6.fontFamily,
    fontWeight: 900,
  },
}));

function TestQuality({ comingSoon, ...props }) {
  const classes = useStyles(props);
  const router = useRouter();

  const hideComingSoonAlert = () => {
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
        router.back();
      }
    }
    window.history.go(-1);
    // return router.push("/");
  };

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          className={classes.testTitle}
        >
          Test the quality of the city&apos;s
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ paddingTop: "1rem", paddingBottom: "3rem" }}
        >
          <ComingSoon show={comingSoon} onClose={hideComingSoonAlert} />
          <Grid item>
            <Card className={classes.airCard}>
              <CardActionArea component={ButtonLink} href="/air">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={air.src}
                  title="Air"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.waterCard}>
              <CardActionArea component={ButtonLink} href="/water">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={water.src}
                  title="water"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.soundCard}>
              <CardActionArea component={ButtonLink} href="/sound">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={sound.src}
                  title="sound"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.radiationCard}>
              <CardActionArea component={ButtonLink} href="/radiation">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={radiation.src}
                  title="radiation"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TestQuality.propTypes = {
  comingSoon: PropTypes.bool,
};

TestQuality.defaultProps = {
  comingSoon: false,
};

export default TestQuality;

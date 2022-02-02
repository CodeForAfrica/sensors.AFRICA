import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import bglanding from "@/sensorsafrica/assets/images/background/bglanding.jpg";
import TestQuality from "@/sensorsafrica/components/Landing/TestQuality";
import Link from "@/sensorsafrica/components/Link";
import Logo from "@/sensorsafrica/components/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    backgroundImage: `url(${bglanding.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  intro: {
    color: "white",
    textAlign: "center",
    textTransform: "none",
    paddingTop: "1rem",
    lineHeight: "3.5rem",
  },
  img: {
    height: "8rem",
    maxWidth: "100%",
  },
}));

function Hero({ comingSoon, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Link href="/">
          <Logo badge="landing" classes={{ img: classes.img }} />
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4" className={classes.intro}>
          We are here to give you actionable information about the quality of
          your city&apos;s air, water, sound and radiation levels.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TestQuality comingSoon={comingSoon} />
      </Grid>
    </Grid>
  );
}

Hero.propTypes = {
  comingSoon: PropTypes.bool,
};

Hero.defaultProps = {
  comingSoon: false,
};

export default Hero;

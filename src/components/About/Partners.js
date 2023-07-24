import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

import business from "@/sensorsafrica/assets/images/logos/business.png";
import cable from "@/sensorsafrica/assets/images/logos/cable.png";
import code from "@/sensorsafrica/assets/images/logos/cfafrica_gray.png";
import dailynation from "@/sensorsafrica/assets/images/logos/dailynation.png";
import guardian from "@/sensorsafrica/assets/images/logos/guardian.png";
import innovate from "@/sensorsafrica/assets/images/logos/innovateafrica_gray.jpg";
import luftdaten from "@/sensorsafrica/assets/images/logos/luftdaten.jpg";
import nation from "@/sensorsafrica/assets/images/logos/nation.png";
import premium from "@/sensorsafrica/assets/images/logos/premium.png";
import star from "@/sensorsafrica/assets/images/logos/star.jpg";
import womanng from "@/sensorsafrica/assets/images/logos/womanng.png";
import Figure from "@/sensorsafrica/components/Figure";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
  mediaTypography: {
    paddingTop: theme.spacing(6),
    textAlign: "center",
    fontWeight: "bold",
  },
  partnerTypography: {
    paddingTop: theme.spacing(6),
    fontWeight: "bold",
  },
  mainGrid: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "8rem",
      paddingRight: "8rem",
    },
  },
  imgContainer: {},
  mediaImg: {
    height: 100,
  },
  logoImg: {
    display: "inline-block",
    filter: "grayscale(1)",
    height: 50,
    padding: "0 8px",
    maxWidth: "100%",
    width: 122,
    [theme.breakpoints.up("sm")]: {
      height: 60,
      width: 143,
    },
    [theme.breakpoints.up("md")]: {
      height: 70,
      width: 164,
    },
  },
  poweredByImg: {
    width: 201,
    [theme.breakpoints.up("sm")]: {
      width: 237,
    },
    [theme.breakpoints.up("md")]: {
      height: 70,
      width: 274,
    },
  },
  partnersContainer: {
    margin: theme.spacing(6),
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: 0,
    },
  },
  titleGrid: {
    padding: "1rem 0",
  },
  logoContainer: {
    padding: "0 2rem",
  },
}));

function Partners(props) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.mediaTypography}>
          Media partners
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure
            src={business}
            alt="Business Daily"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure
            src={premium}
            alt="Premium Times"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure
            src={guardian}
            alt="The Guardian"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure src={nation} alt="The Nation" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure src={star} alt="The Star" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure src={womanng} alt="Woman NG" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className={classes.imgContainer}>
          <Figure
            src={dailynation}
            alt="Daily Nation"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <Figure src={cable} alt="The Cable" className={classes.mediaImg} />
        </Grid>
      </Grid>

      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Grid
          item
          xs={12}
          container="row"
          justifyContent="center"
          alignItems="center"
          className={classes.partnersContainer}
        >
          <div className={classes.logoContainer}>
            <Grid item xs={12} className={classes.titleGrid}>
              <Typography variant="h6" className={classes.partnerTypography}>
                In partnership with
              </Typography>
            </Grid>

            <a
              href="https://codeforafrica.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figure
                src={code}
                alt="Code for Africa"
                className={classes.logoImg}
              />
            </a>
            <a
              href="https://innovateafrica.fund/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figure
                src={innovate}
                alt="innovateAFRICA"
                className={classes.logoImg}
              />
            </a>
          </div>

          <div className={classes.logoContainer}>
            <Grid item xs={12} className={classes.titleGrid}>
              <Typography variant="h6" className={classes.partnerTypography}>
                Powered by
              </Typography>
            </Grid>
            <a
              href="https://luftdaten.info/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Figure
                src={luftdaten}
                alt="Luftdaten Project"
                className={clsx(classes.logoImg, classes.poweredByImg)}
              />
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Partners;

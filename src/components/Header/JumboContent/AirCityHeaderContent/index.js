import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import CityGauge from "@/sensorsafrica/components/Header/JumboContent/AirCityHeaderContent/CityGauge";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gaugeContainer: {
    marginTop: "6rem",
    [theme.breakpoints.up("md")]: {
      marginTop: "1.875rem",
    },
  },
  city: {
    [theme.breakpoints.only("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

function AirCityHeaderContent({ airPol, airPolDescription, city }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        className={classes.gaugeContainer}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="subtitle1" style={{ color: "white" }}>
          THE AIR POLLUTION IN{" "}
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "white" }}
          className={classes.city}
        >
          {city.label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CityGauge
          airPollMeasurement={airPol}
          airPollDescription={airPolDescription}
        />
      </Grid>
    </Grid>
  );
}

AirCityHeaderContent.propTypes = {
  city: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
  airPol: PropTypes.string.isRequired,
  airPolDescription: PropTypes.string.isRequired,
};

export default AirCityHeaderContent;

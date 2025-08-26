import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import IframeComponent from "@/sensorsafrica/components/SensorMap/IframeComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 960,
    width: "100%",
    marginBottom: "3rem",
    backgroundColor: "white",
    gap: "1rem",
    position: "relative",
  },
  headline: {
    textAlign: "center",
    paddingBottom: theme.spacing(2),
  },
  caption: {
    display: "block",
    textTransform: "none",
  },
  mapWrapper: {
    flexGrow: 1,
    height: "100%",
  },
  header: {
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function Map({ zoom, latitude, longitude }) {
  const classes = useStyles();
  const APP_MAP_URL = process.env.NEXT_PUBLIC_APP_MAP_URL;

  return (
    <Grid
      container
      className={classes.root}
      // justifyContent="center"
      // alignItems="center"
    >
      <Grid item xs={12} className={classes.header}>
        <Typography variant="h5" className={classes.headline}>
          SENSORS IN YOUR AREA
          <Typography variant="caption" className={classes.caption}>
            * Click a sensor to view latest readings.
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.mapWrapper}>
        <IframeComponent
          title="Map section"
          src={`${APP_MAP_URL}/#${zoom}/${latitude}/${longitude}`}
          height="100%"
          width="100%"
          frameBorder="0"
          scrolling="no"
        />
      </Grid>
    </Grid>
  );
}

Map.propTypes = {
  zoom: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
};
export default Map;

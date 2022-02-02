import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import ArrowCards from "@/sensorsafrica/components/City/HostSensors/ArrowCards";
import HostCard from "@/sensorsafrica/components/City/HostSensors/HostCard";
import HostSensorButtons from "@/sensorsafrica/components/City/HostSensors/HostSensorButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  description: {
    marginTop: theme.spacing(4),
  },
  arrowDescription: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  hostDescription: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
    },
  },
  mainGrid: {
    paddingRight: "4rem",
    paddingLeft: "4rem",
  },
}));

function HostSensor() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <HostSensorButtons />
      </Grid>

      <Grid item xs={12} className={classes.mainGrid}>
        <Grid
          container
          className={classes.description}
          justifyContent="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={12} md={6} className={classes.arrowDescription}>
            <ArrowCards />
          </Grid>
          <Grid item xs={12} md={6} className={classes.hostDescription}>
            <HostCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HostSensor;

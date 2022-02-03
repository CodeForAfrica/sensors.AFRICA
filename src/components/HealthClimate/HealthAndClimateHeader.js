import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import HealthClimateContent from "@/sensorsafrica/components/Header/JumboContent/HealthClimateContent";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    borderRadius: "none",
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
}));

function HealthClimateHeader() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.jumbotron}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <HealthClimateContent title="HEALTH AND CLIMATE IMPACTS" />
      </Grid>
    </Grid>
  );
}

export default HealthClimateHeader;

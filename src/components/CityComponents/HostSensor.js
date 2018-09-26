import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import ArrowCards from "./ArrowCards";
import HostCard from "./HostCard";
import HostSensorButtons from "../CityComponents/HostSensorButtons";

const styles = theme => ({
  root: {
    height: "900px",
    width: "auto",
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

class HostSensor extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} direction="row" className={classes.root}>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <HostSensorButtons />

          <Grid
            container
            item
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginRight: "8rem", marginLeft: "8rem" }}
          >
            <ArrowCards />
            <HostCard />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(HostSensor);

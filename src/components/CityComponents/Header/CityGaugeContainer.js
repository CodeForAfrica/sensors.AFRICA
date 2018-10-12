import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CityGauge from "./CityGauge";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  gaugeContainer: {
    [theme.breakpoints.down('sm')]: {
      top: "15rem"
    },
    position: "absolute", top: "12rem"
  }
});
class CityGaugeContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid  container item xs={12} className={classes.gaugeContainer}>
        <Grid container item xs={12} direction="column" justify="center" alignItems="center" >
          <Typography variant="subheading" style={{ color: "white" }}>
            THE AIR POLLUTION IN{" "}
          </Typography>
          <Typography variant="display1" style={{ color: "white" }}>
            {this.props.cityLabel.toUpperCase()}
          </Typography>
        </Grid>
        <CityGauge airPollMeasurement={this.props.airPol} />
      </Grid>
    );
  }
}

export default withStyles(styles)(CityGaugeContainer);

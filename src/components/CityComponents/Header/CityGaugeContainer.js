import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CityGauge from "./CityGauge";

export default class CityGaugeContainer extends Component {
  render() {
    return (
      <Grid  container item xs={12} style={{ position: "absolute", top: "12rem" }}>
        <Grid container item xs={12} direction="column" justify="center" alignItems="center" >
          <Typography variant="subheading" style={{ color: "white" }}>
            THE AIR POLLUTION IN{" "}
          </Typography>
          <Typography variant="display1" style={{ color: "white" }}>
            {this.props.city.label.toUpperCase()}
          </Typography>
        </Grid>
        <CityGauge airPollMeasurement={this.props.airPol} />
      </Grid>
    );
  }
}

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import IframeComponent from "../Maps/IframeComponent";

class NigeriaMap extends Component {
  render() {
    return (
      <Grid
        container
        item
        xs={12}
        direction="row"
        style={{ height: "600px", width: "100%" }}
      >
        <Grid container direction="row" justify="center" alignItems="center">
          <Typography variant="subheading" style={{ margin: "1rem" }}>
            SENSORS IN YOUR AREA
          </Typography>
        </Grid>
        <IframeComponent
          title="Map section"
          src="http://map.aq.sensors.africa/#6/3.162/7.976"
          height="100%"
          width="100%"
          frameBorder="0"
        />
      </Grid>
    );
  }
}

export default NigeriaMap;

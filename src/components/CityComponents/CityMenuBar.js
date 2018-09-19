import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CitySearchBar from "../CityComponents/CitySearchBar";

//import assets
import logowhite from "../../assets/Logo-White.png";

import Grid from "@material-ui/core/Grid";
import ViewHeadline from "@material-ui/icons/ViewHeadline";

const styles = {
  icon: {
    color: "white",
    paddingTop: "3%"
  },
  iconContainer: {
    paddingTop: "2rem"
  }
};

class MenuBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} direction="row" justify="space-around">
        <Grid container item xs={8}>
          <img src={logowhite} alt="Sensors Africa Logo" height="100px" />
          <CitySearchBar />
        </Grid>

        <Grid className={classes.iconContainer}>
          <ViewHeadline className={classes.icon} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MenuBar);

import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CitySearchBar from "../../CityComponents/Header/CitySearchBar";
import HambugerMenu from "../../Hambuger/HambugerMenu";

//import assets
import logowhite from "../../../assets/Logo-White.png";
import Grid from "@material-ui/core/Grid";

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
          <HambugerMenu />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MenuBar);

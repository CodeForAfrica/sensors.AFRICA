import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";

import CitySearchBar from "../../SearchBar";
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

function MenuBar({ classes }) {
    return (
      <Grid container item xs={12} direction="row" justify="space-around">
        <Grid container item xs={12}>
          <img src={logowhite} alt="Sensors Africa Logo" height="100px" />
          <CitySearchBar placeholder="Search for another location ..."
          position="not center"/>
        </Grid>

        <Grid className={classes.iconContainer}>
          <HambugerMenu />
        </Grid>
      </Grid>
    );
}

export default withRouter(withStyles(styles)(MenuBar));

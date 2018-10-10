import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import CitySearchBar from "./CitySearchBar";
import HamburgerMenu from "../../Hambuger/HambugerMenu";

//import assets
import logowhite from "../../../assets/Logo-White.png";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%'
    }
  },
  icon: {
    color: "white",
    paddingTop: "3%"
  },
  iconContainer: {
    paddingTop: "2rem"
  }
});

function MenuBar({ classes }) {
    return (
      <Grid
        container
        className={classes.root}
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item>
          <Link to="/">
            <img src={logowhite} alt="sensors.AFRICA" height="100" />
          </Link>
          <CitySearchBar placeholder="Search for another location ..."/>
        </Grid>
        <Grid item>
          <Grid className={classes.iconContainer}>
            <HamburgerMenu />
          </Grid>
        </Grid>
      </Grid>

    );
}

export default withRouter(withStyles(styles)(MenuBar));

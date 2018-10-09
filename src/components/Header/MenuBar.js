import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";

//import assets
import logowhite from "../../assets/Logo-White.png";

import Grid from "@material-ui/core/Grid";
import HambugerMenu from "../Hambuger/HambugerMenu";

const styles = {
  root: {
    paddingRight: "8%",
    paddingLeft: "8%"
  },
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
      <Grid
        container
        item
        xs={12}
        spacing={24}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.root}
      >
        <Link to="/">
          <img src={logowhite} alt="sensors.AFRICA logo" height="100px" />
        </Link>
        <Grid className={classes.iconContainer}>
          <HambugerMenu />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(MenuBar);

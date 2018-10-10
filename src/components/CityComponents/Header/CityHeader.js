import React, { Component } from "react";
import PropTypes from "prop-types";

//import material components
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

//import components
import CityMenuBar from "../../CityComponents/Header/CityMenuBar";
import CityGaugeContainer from "../../CityComponents/Header/CityGaugeContainer";

const styles = theme => ({
  jumbotron: {
    [theme.breakpoints.down('sm')]: {
      height: "600px"
    },
    backgroundColor: "#2FB56B",
    height: "500px",
    borderRadius: "none"
  }
});

class CityHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.jumbotron} container item={12}>
        <CityMenuBar />
        <CityGaugeContainer />
      </Grid>
    );
  }
}

CityHeader.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CityHeader);

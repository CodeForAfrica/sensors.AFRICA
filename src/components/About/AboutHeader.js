import React, { Component } from "react";
import PropTypes from "prop-types";

//import material components
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

//import components
import MenuBar from "../Header/MenuBar.js";
import AboutHeaderContent from "../Header/JumbotronContent/AboutHeaderContent.js";

const styles = {
  jumbotron: {
    backgroundColor: "#2FB56B",
    height: "400px",
    borderRadius: "none"
  }
};

class AboutHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.jumbotron}>
        <MenuBar />
        <AboutHeaderContent
          title="About sensors.AFRICA"
          subheading="sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities.The initiative was seed-funded by innovateAFRICA, and is being incubated by Code For Africa"
        />
      </Grid>
    );
  }
}

AboutHeader.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutHeader);

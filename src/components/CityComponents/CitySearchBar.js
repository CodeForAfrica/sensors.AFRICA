import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
//import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { FormControl, Input } from "@material-ui/core";

const styles = {
  root: {
    paddingTop: "2rem"
  },
  searchBar: {
    width: "300px",
    paddingTop: "0.8rem",
    height: "auto",
    backgroundColor: "white",
    borderRadius: "none"
  },
  inputText: {
    color: "#164B3E",
    fontSize: "1.3rem",
    paddingLeft: "1rem"
  }
};
class CitySearchBar extends Component {
  state = {
    name: "Search by City..."
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <FormControl className={classes.searchBar}>
          <Input
            id="search"
            value={this.state.name}
            className={classes.inputText}
            onChange={this.handleChange}
          />
        </FormControl>
      </Grid>
    );
  }
}

export default withStyles(styles)(CitySearchBar);

import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  buttonContained: {
    backgroundColor: "#2FB56B",
    color: "#fff",
    borderRadius: 0,
    margin: theme.spacing.unit * 2
  },
  buttonOutlined: {
    color: "#164B3E",
    borderRadius: 0,
    margin: theme.spacing.unit * 2
  }
});

class HostSensorButtons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <Button
          variant="outlined"
          size="large"
          className={classes.buttonOutlined}
        >
          SUBSCRIBE
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          CONNECT
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          ACT
        </Button>
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          SHARE
        </Button>
      </Grid>
    );
  }
}

export default withStyles(styles)(HostSensorButtons);

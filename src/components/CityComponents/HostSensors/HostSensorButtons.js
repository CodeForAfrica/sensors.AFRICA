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
  },
  buttonLink: {
    textDecoration: "none"
  }
});

class HostSensorButtons extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="row" justify="center" alignItems="center">
        <a
          href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            size="large"
            className={classes.buttonOutlined}
          >
            SUBSCRIBE
          </Button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            CONNECT
          </Button>
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            ACT
          </Button>
        </a>
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

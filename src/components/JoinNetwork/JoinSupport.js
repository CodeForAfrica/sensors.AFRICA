import React, { Component } from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: "40rem",
    paddingTop: "15%"
  },
  card: {
    height: "200px",
    width: "350px",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: "#F3F3F3",
    margin: theme.spacing.unit * 1
  },
  cardContent: {
    borderRadius: 0,
    backgroundColor: "#F3F3F3"
  },
  typography: {
    margin: theme.spacing.unit * 3
  },
  button: {
    color: "white",
    borderRadius: "0",
    backgroundColor: "#2FB56B"
  },
  uploadButton: {
    color: "#164B3E",
    borderRadius: "0"
  },
  buttonLink: {
    textDecoration: "none"
  }
});

class JoinSupport extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        align="center"
        className="support"
      >
        <Card item xs={3} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="title" className={classes.typography}>
              SUPPORT EXISTING SENSORS NETWORKS
            </Typography>
            <a
              href="https://archive.sensors.africa/"
              className={classes.buttonLink}
            >
              <Button
                variant="outlined"
                color="Upload"
                className={classes.uploadButton}
              >
                VIEW DATABASE
              </Button>
            </a>
          </CardContent>
        </Card>
        <Card item xs={3} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="title" className={classes.typography}>
              KICKSTART YOUR CITY'S OWN SENSOR PROGRAM
            </Typography>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              className={classes.buttonLink}
            >
              <Button variant="contained" className={classes.button}>
                SIGN UP HERE
              </Button>
            </a>
          </CardContent>
        </Card>
        <Card item xs={3} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="title" className={classes.typography}>
              LET YOUR CITY KNOW THAT CLEAN AIR MATTERS TO YOU
            </Typography>
            <a href="" className={classes.buttonLink}>
              <Button variant="contained" className={classes.button}>
                SIGN UP HERE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

JoinSupport.PropTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinSupport);

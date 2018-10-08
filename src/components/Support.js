import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  },
  card: {
    height: '200px',
    width: '350px',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: '#F3F3F3',
    margin: theme.spacing.unit * 1
  },
  cardContent: {
    borderRadius: 0,
    backgroundColor: '#F3F3F3'
  },
  typography: {
    margin: theme.spacing.unit * 3
  },
  button: {
    color: 'white',
    borderRadius: '0',
    backgroundColor: '#2FB56B'
  },
  uploadButton: {
    color: '#164B3E',
    borderRadius: '0'
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

class Support extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        align="center"
        className={classes.root}
      >
        <Card item xs={3} className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="title" className={classes.typography}>
              SUPPORT EXISTING SENSORS NETWORKS
            </Typography>
            <a
              href="https://archive.sensors.africa/"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
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
              LET YOUR CITY KNOW THAT CLEAN WATER MATTERS TO YOU
            </Typography>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
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

Support.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Support);

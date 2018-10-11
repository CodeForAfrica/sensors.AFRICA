import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    height: 200,
    width: 350,
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

function Support({ classes, classNames }) {
  const className = classNames ? `${classes.root} ${classNames}` : classes.root;
  return (
    <Grid container justify="center" align="center" className={className}>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.typography}>
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
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.typography}>
              KICKSTART YOUR CITY&apos;S OWN SENSOR PROGRAM
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
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h6" className={classes.typography}>
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
    </Grid>
  );
}

Support.propTypes = {
  classes: PropTypes.object.isRequired,
  classNames: PropTypes.string
};
Support.defaultProps = {
  classNames: undefined
};

export default withStyles(styles)(Support);

import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '4rem',
    paddingBottom: '4rem'
  },
  card: {
    height: '15rem',
    width: '22rem',
    margin: '0.5rem'
  },
  cardContent: {
    margin: '1rem auto'
  },
  button: {
    color: 'white',
    backgroundColor: '#2FB56B',
    textTransform: 'uppercase',
    fontFamilty: theme.typography.h5.fontFamilty,
    fontWeight: theme.typography.h5.fontWeight,
    height: '3 rem',
    margin: '1rem auto'
  },
  buttonOutlined: {
    color: theme.palette.primary.dark,
    textTransform: 'uppercase',
    borderColor: theme.palette.primary.dark,
    fontFamilty: theme.typography.h5.fontFamilty,
    fontWeight: theme.typography.h5.fontWeight,
    height: '3 rem',
    margin: '1rem auto'
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
            <Typography variant="h5">SUPPORT</Typography>
            <Typography variant="h5">EXISTING SENSORS</Typography>
            <Typography variant="h5">NETWORKS</Typography>
            <a
              href="https://archive.sensors.africa/"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.buttonOutlined}
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
            <Typography variant="h5">KICKSTART YOUR</Typography>
            <Typography variant="h5">CITY&apos;S OWN</Typography>
            <Typography variant="h5">SENSOR PROGRAM</Typography>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                SIGN UP HERE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">LET YOUR CITY KNOW</Typography>
            <Typography variant="h5">THAT CLEAN WATER</Typography>
            <Typography variant="h5">MATTERS TO YOU</Typography>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
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

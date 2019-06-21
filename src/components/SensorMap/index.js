import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IframeComponent from './IframeComponent';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 610,
    width: '100%',
    marginBottom: '3rem',
    backgroundColor: 'white'
  },
  headline: {
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 3
  },
  caption: {
    textTransform: 'none'
  }
});

function Map({ classes, zoom, center }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.headline}>
          SENSORS IN YOUR AREA
          <Typography variant="caption" className={classes.caption}>
            * Click a sensor to view latest readings.
          </Typography>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <IframeComponent
          title="Map section"
          src={`//map.aq.sensors.africa/?zoom=${zoom}&center=${center}`}
          height="500"
          width="100%"
          frameBorder="0"
          scrollling="no"
        />
      </Grid>
    </Grid>
  );
}

Map.propTypes = {
  classes: PropTypes.object.isRequired,
  zoom: PropTypes.string.isRequired,
  center: PropTypes.string.isRequired
};
export default withStyles(styles)(Map);

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IframeComponent from 'components/SensorMap/IframeComponent';

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

function Map({ classes, zoom, latitude, longitude }) {
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
          src={`//v2.map.aq.sensors.africa/#${zoom}/${latitude}/${longitude}`}
          height="500"
          width="100%"
          frameBorder="0"
          scrolling="no"
        />
      </Grid>
    </Grid>
  );
}

Map.propTypes = {
  zoom: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired
};
export default withStyles(styles)(Map);

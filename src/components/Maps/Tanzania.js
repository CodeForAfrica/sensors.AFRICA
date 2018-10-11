import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IframeComponent from './IframeComponent';

const styles = theme => ({
  root: {
    height: 550,
    width: '100%',
    paddingBottom: '1rem'
  },
  headline: {
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 3
  }
});

function TanzaniaMap({ classes }) {
  return (
    <Grid container item xs={12} direction="row" className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="h5" className={classes.headline}>
          SENSORS IN YOUR AREA
        </Typography>
      </Grid>
      <IframeComponent
        title="Map section"
        src="//map.aq.sensors.africa/#7/-6.937/36.793"
        height="100%"
        width="100%"
        frameBorder="0"
        scrollling="no"
      />
    </Grid>
  );
}

TanzaniaMap.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TanzaniaMap);

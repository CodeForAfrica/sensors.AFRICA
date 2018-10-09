import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IframeComponent from './IframeComponent';

const styles = {
  root: {
    height: '550px',
    width: '100%',
    paddingBottom: '1rem'
  },
  subheading: {
    margin: '3rem'
  }
};

function KenyaMap({ classes }) {
  return (
    <Grid container item xs={12} direction="row" className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Typography variant="subheading" className={classes.subheading}>
          SENSORS IN YOUR AREA
        </Typography>
      </Grid>
      <IframeComponent
        title="Map section"
        src="http://map.aq.sensors.africa/#9/-1.4272/36.8147"
        height="100%"
        width="100%"
        frameBorder="0"
        scrollling="no"
      />
    </Grid>
  );
}

KenyaMap.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(KenyaMap);

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  dial: {
    textAlign: 'center',
  },
  measurement: {
    width: '16rem',
    padding: '0.75rem 0',
    color: 'white',
    textAlign: 'center',
    borderBottom: '1px solid white',
  },
  measurementUnit: {
    width: '16rem',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  safeLevel: {
    width: '16rem',
    padding: '0.75rem 0',
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

function DigitalGauge({ airPollMeasurement, airPollDescription }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12} className={classes.dial}>
          <Typography
            variant="h2"
            className={classes.measurement}
            component="h1"
          >
            {airPollMeasurement}
            {airPollMeasurement !== '--' && (
              <Typography
                variant="caption"
                component="small"
                className={classes.measurementUnit}
              >
                PM
                <sub>2.5</sub> 24 Hours Exposure
              </Typography>
            )}
          </Typography>
          <Typography
            variant="caption"
            component="h2"
            className={classes.safeLevel}
          >
            {airPollDescription}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

DigitalGauge.propTypes = {
  airPollMeasurement: PropTypes.string.isRequired,
  airPollDescription: PropTypes.string.isRequired,
};

export default DigitalGauge;

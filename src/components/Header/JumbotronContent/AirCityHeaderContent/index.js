import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import CityGauge from './CityGauge';

const styles = theme => ({
  gaugeContainer: {
    flexGrow: 1,
    position: 'absolute',
    top: '15rem',
    [theme.breakpoints.up('md')]: {
      top: '12rem'
    }
  }
});

function AirCityHeaderContent({ airPol, city, classes }) {
  return (
    <Grid container className={classes.gaugeContainer}>
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="subheading" style={{ color: 'white' }}>
          THE AIR POLLUTION IN{' '}
        </Typography>
        <Typography variant="display1" style={{ color: 'white' }}>
          {city.label.toUpperCase()}
        </Typography>
      </Grid>
      <CityGauge airPollMeasurement={airPol} />
    </Grid>
  );
}

AirCityHeaderContent.propTypes = {
  city: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  airPol: PropTypes.number.isRequired
};

export default withStyles(styles)(AirCityHeaderContent);

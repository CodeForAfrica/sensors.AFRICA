import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CityGauge from 'components/Header/JumboContent/AirCityHeaderContent/CityGauge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gaugeContainer: {
    marginTop: '6rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '1.875rem',
    },
  },
  city: {
    [theme.breakpoints.only('xs')]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

function AirCityHeaderContent({ airPol, airPolDescription, city }) {
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
        className={classes.gaugeContainer}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Typography variant="subtitle1" style={{ color: 'white' }}>
          THE AIR POLLUTION IN{' '}
        </Typography>
        <Typography
          variant="h4"
          style={{ color: 'white' }}
          className={classes.city}
        >
          {city.label}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CityGauge
          airPollMeasurement={airPol}
          airPollDescription={airPolDescription}
        />
      </Grid>
    </Grid>
  );
}

AirCityHeaderContent.propTypes = {
  city: PropTypes.shape({}).isRequired,
  classes: PropTypes.shape({}).isRequired,
  airPol: PropTypes.string.isRequired,
  airPolDescription: PropTypes.string.isRequired,
};

export default AirCityHeaderContent;

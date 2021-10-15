import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CityGauge from 'components/Header/JumboContent/AirCityHeaderContent/CityGauge';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(95, 191, 130)',
    height: '100vh',
    maxWidth: '100%',
    width: '100vw',
  },
});

function AirGauge({ data, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <CityGauge
        airPollMeasurement={data.average}
        airPollDescription={data.averageDescription}
      />
    </Grid>
  );
}

AirGauge.propTypes = {
  data: PropTypes.shape({
    average: PropTypes.string,
    averageDescription: PropTypes.string,
  }).isRequired,
};

export default AirGauge;

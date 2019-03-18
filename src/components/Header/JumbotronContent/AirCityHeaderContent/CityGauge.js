import React from 'react';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DigitalGauge from './DigitalGauge';
import RadialGauge from './RadialGauge';

const styles = () => ({});

function CityGauge({ airPollMeasurement, airPollDescription, width }) {
  const Gauge = width === 'xs' ? DigitalGauge : RadialGauge;

  return (
    <Gauge
      airPollMeasurement={airPollMeasurement}
      airPollDescription={airPollDescription}
    />
  );
}

CityGauge.propTypes = {
  airPollMeasurement: PropTypes.string.isRequired,
  airPollDescription: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CityGauge));

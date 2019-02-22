import React from 'react';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DigitalGauge from './DigitalGauge';
import RadialGauge from './RadialGauge';

const styles = () => ({});

function CityGauge({ airPollMeasurement, classes, width }) {
  const percentage = ((parseFloat(airPollMeasurement) / 25) * 100).toFixed(1);
  let percentageRelative;
  let isOverGuideline = false;
  if (percentage > 100) {
    percentageRelative = percentage - 100;
    isOverGuideline = true;
  } else {
    percentageRelative = 100 - percentage;
  }
  const Gauge = width === 'xs' || width === 'sm' ? DigitalGauge : RadialGauge;

  return (
    <Gauge
      airPollMeasurement={airPollMeasurement}
      percentageRelative={percentageRelative}
      isOverGuideline={isOverGuideline}
    />
  );
}

CityGauge.propTypes = {
  classes: PropTypes.object.isRequired,
  airPollMeasurement: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CityGauge));

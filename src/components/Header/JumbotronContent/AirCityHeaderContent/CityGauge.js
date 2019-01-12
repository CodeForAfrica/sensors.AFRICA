import React from 'react';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import RadialGauge from './RadialGauge';

const styles = () => ({});

function CityGauge({ airPollMeasurement, classes, width }) {
  if (width === 'xs' || width === 'sm') {
    return null;
  }

  return <RadialGauge airPollMeasurement={airPollMeasurement} />;
}

CityGauge.propTypes = {
  classes: PropTypes.object.isRequired,
  airPollMeasurement: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CityGauge));

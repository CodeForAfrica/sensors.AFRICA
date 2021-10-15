import React from 'react';
import PropTypes from 'prop-types';

import { withWidth } from '@material-ui/core';

import DigitalGauge from 'components/Header/JumboContent/AirCityHeaderContent/DigitalGauge';
import RadialGauge from 'components/Header/JumboContent/AirCityHeaderContent/RadialGauge';

function CityGauge({ airPollMeasurement, airPollDescription, width }) {
  const Gauge = width === 'xs' || width === 'sm' ? DigitalGauge : RadialGauge;

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
  width: PropTypes.string.isRequired,
};

export default withWidth()(CityGauge);

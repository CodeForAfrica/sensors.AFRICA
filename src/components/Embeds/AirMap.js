import React from 'react';
import PropTypes from 'prop-types';

const CITIES_LOCATION = {
  nairobi: '12/-1.2709/36.8169',
  lagos: '12/6.4552/3.4198',
  'dar-es-salaam': '12/-6.8555/39.1518'
};

function AirMap({ location }) {
  const params = new URLSearchParams(location.search);
  const city = params.get('city');

  window.location = `https://map.aq.sensors.africa/#${CITIES_LOCATION[city]}`;

  return <React.Fragment />;
}

AirMap.propTypes = {
  location: PropTypes.isRequired
};

export default AirMap;

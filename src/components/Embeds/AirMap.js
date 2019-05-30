import React from 'react';
import PropTypes from 'prop-types';

import { CITIES_LOCATION } from '../../api';

function AirMap({ location }) {
  const params = new URLSearchParams(location.search);
  const city = params.get('city');
  return (
    <iframe
      src={`https://map.aq.sensors.africa/#${CITIES_LOCATION[city].location}`}
      name={`sensors-map-${CITIES_LOCATION[city].slug}`}
      title={`sensors.AFRICA | ${CITIES_LOCATION[city].name} Sensor Map`}
      scrolling="no"
      frameBorder="0"
      height="auto"
      width="100%"
      style={{
        width: '100vw',
        height: '100vh'
      }}
      allowFullScreen
    />
  );
}

AirMap.propTypes = {
  location: PropTypes.isRequired
};

export default AirMap;

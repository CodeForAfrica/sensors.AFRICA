import React from 'react';
import PropTypes from 'prop-types';

import { CITIES_LOCATION } from '../../api';

function AirMap({ location }) {
  const params = new URLSearchParams(location.search);
  const city = params.get('city');

  return (
    <iframe
      title="Sensor Map"
      src={`https://map.aq.sensors.africa/#${CITIES_LOCATION[city].location}`}
      style={{
        height: '100vh',
        width: '100vw'
      }}
      frameBorder="none"
    />
  );
}

AirMap.propTypes = {
  location: PropTypes.isRequired
};

export default AirMap;

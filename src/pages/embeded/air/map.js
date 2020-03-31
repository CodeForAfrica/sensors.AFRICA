import React from 'react';

import { AirMap } from 'components/Embeds';
import { CITIES_LOCATION } from 'api';
import NotFound from 'pages/404';

function Map({ city }) {
  // if !data, 404
  if (!CITIES_LOCATION[city]) {
    return <NotFound />;
  }
  return <AirMap city={city} />;
}

export async function getServerSideProps({ query: { city } }) {
  return { props: { city } };
}

export default Map;

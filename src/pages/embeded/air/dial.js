import React from 'react';

import API, { CITIES_LOCATION, getFormattedP2Stats } from 'api';
import { AirGauge } from 'components/Embeds';
import NotFound from 'pages/404';

function Dial({ city, data, errorCode }) {
  // if !data, 404
  if (!CITIES_LOCATION[city] || errorCode > 400) {
    return <NotFound />;
  }
  return <AirGauge data={data} />;
}

export async function getServerSideProps({ query: { city } }) {
  const airRes = await API.getAirData(city);
  const errorCode = airRes.statusCode > 200 && airRes.statusCode;
  const air = (!errorCode && (await airRes.json())) || {};
  const data = getFormattedP2Stats(air);

  return { props: { city, data } };
}

export default Dial;

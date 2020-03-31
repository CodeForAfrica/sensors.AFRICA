import React from 'react';

import API, { CITIES_LOCATION, getFormattedWeeklyP2Stats } from 'api';
import { AirGraph } from 'components/Embeds';
import NotFound from 'pages/404';

function Graph({ city, data, errorCode }) {
  // if !data, 404
  if (!CITIES_LOCATION[city] || errorCode > 400) {
    return <NotFound />;
  }
  return <AirGraph data={data} />;
}

export async function getServerSideProps({ query: { city } }) {
  const weeklyP2Res = await API.getWeeklyP2Data(city);
  const errorCode = weeklyP2Res.statusCode > 200 && weeklyP2Res.statusCode;
  const weeklyP2 = (!errorCode && (await weeklyP2Res.json())) || {};
  const data = getFormattedWeeklyP2Stats(weeklyP2);

  return { props: { city, data } };
}

export default Graph;

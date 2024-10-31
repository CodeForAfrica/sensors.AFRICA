import PropTypes from "prop-types";
import React from "react";

import { AirGraph } from "@/sensorsafrica/components/Embeds";
import API, {
  CITIES_LOCATION,
  getFormattedWeeklyP2Stats,
} from "@/sensorsafrica/pages/api";

function Graph({ data }) {
  return <AirGraph data={data} />;
}

Graph.propTypes = {
  data: PropTypes.shape({}),
};

Graph.defaultProps = {
  data: undefined,
};

export async function getServerSideProps({ query: { city } }) {
  if (!CITIES_LOCATION[city]) {
    return {
      notFound: true,
    };
  }
  const weeklyP2Res = await API.getWeeklyP2Data(city);
  if (!weeklyP2Res.ok) {
    return {
      notFound: true,
    };
  }
  const weeklyP2 = (await weeklyP2Res.json()) || {};
  const data = getFormattedWeeklyP2Stats(weeklyP2);

  return { props: { city, data } };
}

export default Graph;

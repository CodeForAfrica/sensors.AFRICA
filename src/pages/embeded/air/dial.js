import PropTypes from "prop-types";
import React from "react";

import API, { CITIES_LOCATION, getFormattedP2Stats } from "@/sensorsafrica/api";
import { AirGauge } from "@/sensorsafrica/components/Embeds";

function Dial({ data }) {
  return <AirGauge data={data} />;
}

Dial.propTypes = {
  data: PropTypes.shape({}),
};

Dial.defaultProps = {
  data: undefined,
};

export async function getServerSideProps({ query: { city } }) {
  if (!CITIES_LOCATION[city]) {
    return {
      notFound: true,
    };
  }
  const airRes = await API.getAirData(city);
  if (!airRes.ok) {
    return {
      notFound: true,
    };
  }

  const air = (await airRes.json()) || {};
  const data = getFormattedP2Stats(air);

  return { props: { city, data } };
}

export default Dial;

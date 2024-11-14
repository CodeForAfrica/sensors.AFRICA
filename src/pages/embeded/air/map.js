import PropTypes from "prop-types";
import React from "react";

import { AirMap } from "@/sensorsafrica/components/Embeds";
import { CITIES_LOCATION } from "@/sensorsafrica/lib/api";

function Map({ city }) {
  return <AirMap city={city} />;
}

Map.propTypes = {
  city: PropTypes.string,
};

Map.defaultProps = {
  city: undefined,
};

export async function getServerSideProps({ query: { city } }) {
  if (!CITIES_LOCATION[city]) {
    return {
      notFound: true,
    };
  }
  return { props: { city } };
}

export default Map;

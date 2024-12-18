import PropTypes from "prop-types";
import React from "react";

import { CITIES_LOCATION } from "@/sensorsafrica/lib/api";

function AirMap({ city }) {
  const APP_MAP_URL = process.env.NEXT_PUBLIC_APP_MAP_URL;

  return (
    <iframe
      src={`${APP_MAP_URL}/#${CITIES_LOCATION[city].zoom}/${CITIES_LOCATION[city].latitude}/${CITIES_LOCATION[city].longitude}`}
      name={`sensors-map-${CITIES_LOCATION[city].slug}`}
      title={`sensors.AFRICA | ${CITIES_LOCATION[city].name} Sensor Map`}
      scrolling="no"
      frameBorder="0"
      height="auto"
      width="100%"
      style={{
        width: "100vw",
        height: "100vh",
      }}
      allowFullScreen
    />
  );
}

AirMap.propTypes = {
  city: PropTypes.string.isRequired,
};

export default AirMap;

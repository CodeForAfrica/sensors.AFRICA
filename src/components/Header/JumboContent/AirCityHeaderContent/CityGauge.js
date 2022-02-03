import { withWidth } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";

import DigitalGauge from "@/sensorsafrica/components/Header/JumboContent/AirCityHeaderContent/DigitalGauge";
import RadialGauge from "@/sensorsafrica/components/Header/JumboContent/AirCityHeaderContent/RadialGauge";

function CityGauge({ airPollMeasurement, airPollDescription, width }) {
  const Gauge = width === "xs" || width === "sm" ? DigitalGauge : RadialGauge;

  return (
    <Gauge
      airPollMeasurement={airPollMeasurement}
      airPollDescription={airPollDescription}
    />
  );
}

CityGauge.propTypes = {
  airPollMeasurement: PropTypes.string.isRequired,
  airPollDescription: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(CityGauge);

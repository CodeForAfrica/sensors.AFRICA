import PropTypes from "prop-types";
import React from "react";

import QualityStatsGraph from "@/sensorsafrica/components/City/QualityStatsGraph";

function AirGraph({ data }) {
  return <QualityStatsGraph data={data} />;
}

AirGraph.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AirGraph;

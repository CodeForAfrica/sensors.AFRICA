import React from 'react';
import PropTypes from 'prop-types';

import QualityStatsGraph from 'components/City/QualityStatsGraph';

function AirGraph({ data }) {
  return <QualityStatsGraph data={data} />;
}

AirGraph.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default AirGraph;

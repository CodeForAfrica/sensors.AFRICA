import React from 'react';
import PropTypes from 'prop-types';

import QualityStatsGraph from '../City/QualityStatsGraph';

import { API, formatWeeklyP2Stats } from '../../api';

class AirGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: []
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const city = params.get('city');

    API.getOneWeekAirData(city, json => {
      let stats = [];
      if (json.count === 1) {
        stats = formatWeeklyP2Stats(json.results[0].P2 || []);
      }
      this.setState({ stats });
    });
  }

  render() {
    const { stats } = this.state;
    return <QualityStatsGraph data={stats} />;
  }
}

AirGraph.propTypes = {
  location: PropTypes.isRequired
};

export default AirGraph;

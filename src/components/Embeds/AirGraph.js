import React from 'react';
import PropTypes from 'prop-types';

import QualityStatsGraph from '../City/QualityStatsGraph';

const DATE_FMT_OPTIONS = {
  timeZone: 'UTC',
  weekday: 'short',
  day: 'numeric',
  month: 'short'
};

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

    const formatWeeklyP2Stats = data => {
      const stats = [];
      // Start with the oldest value
      for (let i = data.length - 1; i >= 0; i -= 1) {
        let averagePM = Number.parseFloat(data[i].average);
        if (Number.isNaN(averagePM)) {
          averagePM = 0.0;
        }
        const date = new Date(data[i].start_datetime).toLocaleDateString(
          'en-US',
          DATE_FMT_OPTIONS
        );
        stats.push({ date, averagePM });
      }
      return stats;
    };

    const processJson = json => {
      let stats = [];
      if (json.count === 1) {
        stats = formatWeeklyP2Stats(json.results[0].P2 || []);
      }
      this.setState({ stats });
    };

    const fromDate = new Date(Date.now() - 7 * 24 * 3600 * 1000)
      .toISOString()
      .substr(0, 10);
    fetch(
      `https://api.sensors.africa/v2/data/air/?city=${city}&from=${fromDate}&value_type=P2`
    )
      .then(data => data.json())
      .then(json => processJson(json));
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

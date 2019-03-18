import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import CityGauge from '../Header/JumbotronContent/AirCityHeaderContent/CityGauge';

class AirGauge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {
        average: '--',
        description: ''
      }
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const city = params.get('city');

    const formatCurrentP2Stats = (data, isPm2 = false) => {
      const formatted = {};
      ['average', 'maximum', 'minimum'].forEach(stat => {
        const parsed = Number.parseFloat(data[stat]);
        if (isPm2 && stat === 'average') {
          formatted.description = `measurements not recorded`;
          if (!Number.isNaN(parsed)) {
            let difference = 25.0 - parsed;
            let position = 'below';
            if (parsed > 25.0) {
              difference = parsed - 25.0;
              position = 'above';
            }
            const percentage = ((difference / 25.0) * 100).toFixed(2);
            formatted.description = `${percentage}% ${position} the safe level`;
          }
        }
        formatted[stat] = Number.isNaN(parsed) ? '--' : parsed.toFixed(2);
      });
      return formatted;
    };

    const processJson = json => {
      let stats = {};
      if (json.count === 1) {
        stats = formatCurrentP2Stats(json.results[0].P2 || {}, true);
      }
      this.setState({ stats });
    };

    this.setState({
      stats: {
        average: '--',
        description: 'loading'
      }
    });
    fetch(`https://api.sensors.africa/v2/data/air/?city=${city}`)
      .then(data => data.json())
      .then(json => processJson(json));
  }

  render() {
    const { stats } = this.state;
    return (
      <Grid
        container
        style={{
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgb(95, 191, 130)'
        }}
      >
        <CityGauge
          airPollMeasurement={stats.average}
          airPollDescription={stats.description}
        />
      </Grid>
    );
  }
}

AirGauge.propTypes = {
  location: PropTypes.isRequired
};

export default AirGauge;

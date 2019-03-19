import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import CityGauge from '../Header/JumbotronContent/AirCityHeaderContent/CityGauge';

import { API, formatCurrentP2Stats } from '../../api';

class AirGauge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {
        average: '--',
        averageDescription: ''
      }
    };
  }

  componentDidMount() {
    const { location } = this.props;
    const params = new URLSearchParams(location.search);
    const city = params.get('city');

    this.setState({
      stats: {
        average: '--',
        averageDescription: 'loading'
      }
    });

    API.getCurrentAirData(city, json => {
      let stats = {};
      if (json.count === 1) {
        stats = formatCurrentP2Stats(json.results[0].P2 || {}, true);
      }
      this.setState({ stats });
    });
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
          airPollDescription={stats.averageDescription}
        />
      </Grid>
    );
  }
}

AirGauge.propTypes = {
  location: PropTypes.isRequired
};

export default AirGauge;

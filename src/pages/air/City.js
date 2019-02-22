import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Navbar from '../../components/Header/Navbar';
import PartnerLogos from '../../components/PartnerLogos';
import Footer from '../../components/Footer';
import SensorMap from '../../components/SensorMap';
import CityHeader from '../../components/City/Header/CityHeader';
import CallToAction from '../../components/City/CallToAction';
import PollutionStats from '../../components/City/PollutionStats';
import QualityStats from '../../components/City/SensorsQualityStats';
import HostSensorsButton from '../../components/City/HostSensors/HostSensorButtons';

import '../../assets/css/App.css';

const DEFAULT_CITY = 'nairobi';
const CITIES_LOCATION = {
  nairobi: {
    latitude: '-1.',
    longitude: '36.',
    name: 'Nairobi',
    country: 'Kenya',
    label: 'Nairobi, Kenya',
    location: '12/-1.2709/36.8169',
    twitterHandle: '@nairobicitygov'
  },
  lagos: {
    latitude: '6.',
    longitude: '3.',
    name: 'Lagos',
    country: 'Nigeria',
    label: 'Lagos, Nigeria',
    location: '12/6.4552/3.4198',
    twitterHandle: '@followlasg'
  },
  'dar-es-salaam': {
    latitude: '-6.',
    longitude: '39.',
    name: 'Dar es Salaam',
    country: 'Tanzania',
    label: 'Dar-es-salaam, Tanzania',
    location: '12/-6.8555/39.1518',
    twitterHandle: '#DarEsSalaam'
  }
};
const CITIES_POLLUTION_STATS = {
  nairobi: {
    deathCount: '19,112',
    childDeathCount: '6,672',
    topIllness: 'Acute Lower',
    annualAverage: '17',
    percent: '70% more'
  },
  lagos: {
    deathCount: '290,456',
    childDeathCount: '98,001',
    topIllness: 'Lower',
    annualAverage: '122',
    percent: '170% more'
  },
  'dar-es-salaam': {
    deathCount: '41,251',
    childDeathCount: '11,440',
    topIllness: 'Lower',
    annualAverage: '23',
    percent: '130% more'
  }
};
const SENSOR_READINGS_URL = 'https://api.sensors.africa/v2/';
const AQ_COLOR = [
  '#5fbf82',
  '#34b86f',
  '#299a5c',
  '#ce8e4e',
  '#cf7d4e',
  '#d45f4b',
  '#ce4c34',
  '#b72025',
  '#2A2A2B'
];
function aqIndex(aq) {
  if (aq < 10) {
    return 0;
  }
  if (aq < 20) {
    return 1;
  }
  if (aq < 30) {
    return 2;
  }
  if (aq < 40) {
    return 3;
  }
  if (aq < 50) {
    return 4;
  }
  if (aq < 60) {
    return 5;
  }
  if (aq < 120) {
    return 6;
  }
  if (aq <= 150) {
    return 7;
  }
  return 8;
}

const styles = () => ({
  root: {
    flexGrow: 1,

    // TODO(kilemensi): This is hack to force the page to be 100% wide w/o
    //                  horizontal scrollbars.
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
  }
});

const CITY_PATHNAME = '/air/city';
class City extends React.Component {
  constructor() {
    super();
    this.state = {
      city: DEFAULT_CITY,
      cityP2Stats: {
        average: '--',
        averageDescription: 'measurements not recorded'
      },
      isLoading: false
    };

    this.fetchAirQuality = this.fetchAirQuality.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let { city } = this.state;
    const { match } = this.props;
    if (match) {
      ({ city } = match.params);
    }

    this.fetchAirQuality(city);
  }

  fetchAirQuality(city) {
    const processStats = (data, isPm2 = false) => {
      const formatted = {};
      ['average', 'maximum', 'minimum'].forEach(stat => {
        const parsed = Number.parseFloat(data[stat]);
        if (isPm2 && stat === 'average') {
          formatted.averageDescription = `measurements not recorded`;
          if (!Number.isNaN(parsed)) {
            let difference = 10.0 - parsed;
            let position = 'below';
            if (parsed > 10.0) {
              difference = parsed - 10.0;
              position = 'above';
            }
            const percentage = ((difference / 10) * 100).toFixed(2);
            formatted.averageDescription = `${percentage} ${position} the safe level`;
          }
        }
        formatted[stat] = Number.isNaN(parsed) ? '--' : parsed.toFixed(2);
      });
      return formatted;
    };
    const processJson = json => {
      let cityP2Stats = {};
      let cityTemperatureStats = {};
      let cityHumidityStats = {};
      if (json.count === 1) {
        cityP2Stats = json.results[0].P2 || {};
        cityTemperatureStats = json.results[0].temperature || {};
        cityHumidityStats = json.results[0].humidity || {};
      }
      cityP2Stats = processStats(cityP2Stats, true);
      cityTemperatureStats = processStats(cityTemperatureStats);
      cityHumidityStats = processStats(cityHumidityStats);
      this.setState({
        city,
        cityP2Stats,
        cityTemperatureStats,
        cityHumidityStats,
        isLoading: false
      });
    };

    this.setState(state => ({
      city: state.city,
      isLoading: true,
      cityP2Stats: state.cityP2Stats,
      cityTemperatureStats: state.cityTemperatureStats,
      cityHumidityStats: state.cityHumidityStats
    }));
    fetch(`${SENSOR_READINGS_URL}data/air/?city=${city}`)
      .then(data => data.json())
      .then(json => processJson(json));
  }

  handleSearch(option) {
    const searchedCity = (option && option.value) || DEFAULT_CITY;
    const { city } = this.state;
    if (searchedCity !== city) {
      const path = `${CITY_PATHNAME}/${searchedCity}`;

      const { history } = this.props;
      history.push(path);
      this.fetchAirQuality(searchedCity);
    }
  }

  render() {
    const { classes, url } = this.props;
    const {
      city,
      isLoading,
      cityP2Stats = {},
      cityHumidityStats = {},
      cityTemperatureStats = {}
    } = this.state;
    let aqColorIndex = 8;
    if (cityP2Stats.average !== '--') {
      aqColorIndex = aqIndex(cityP2Stats.average);
    }
    const aqColor = AQ_COLOR[aqColorIndex];

    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <DocumentHead url={url} />
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          {isLoading && <LinearProgress />}

          <CityHeader
            city={CITIES_LOCATION[city]}
            airPol={cityP2Stats.average}
            airPolDescription={cityP2Stats.averageDescription}
            aqColor={aqColor}
            handleSearch={this.handleSearch}
          />
        </Grid>
        <Grid item xs={12}>
          <HostSensorsButton city={CITIES_LOCATION[city]} />
        </Grid>
        <Grid item xs={12}>
          <PollutionStats
            pollutionStats={CITIES_POLLUTION_STATS[city]}
            city={CITIES_LOCATION[city]}
          />
        </Grid>
        <Grid item xs={12} id="map">
          <SensorMap mapLocation={CITIES_LOCATION[city].location} />
        </Grid>
        <Grid item xs={12}>
          <QualityStats
            cityHumidityStats={cityHumidityStats}
            cityP2Stats={cityP2Stats}
            cityTemperatureStats={cityTemperatureStats}
          />
        </Grid>
        <Grid item xs={12}>
          <CallToAction />
        </Grid>
        <Grid item xs={12}>
          <PartnerLogos />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(City));

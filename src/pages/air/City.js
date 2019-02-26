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
import QualityStatsGraph from '../../components/City/QualityStatsGraph';

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
const SENSOR_READINGS_URL = 'https://api.sensors.africa/v2/data/air/';
const DATE_FMT_OPTIONS = {
  timeZone: 'UTC',
  weekday: 'short',
  day: 'numeric',
  month: 'short'
};
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

const formatCurrentP2Stats = (data, isPm2 = false) => {
  const formatted = {};
  ['average', 'maximum', 'minimum'].forEach(stat => {
    const parsed = Number.parseFloat(data[stat]);
    if (isPm2 && stat === 'average') {
      formatted.averageDescription = `measurements not recorded`;
      if (!Number.isNaN(parsed)) {
        let difference = 25.0 - parsed;
        let position = 'below';
        if (parsed > 25.0) {
          difference = parsed - 25.0;
          position = 'above';
        }
        const percentage = ((difference / 25.0) * 100).toFixed(2);
        formatted.averageDescription = `${percentage}% ${position} the safe level`;
      }
    }
    formatted[stat] = Number.isNaN(parsed) ? '--' : parsed.toFixed(2);
  });
  return formatted;
};

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

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      city: DEFAULT_CITY,
      cityP2Stats: {
        average: '--',
        averageDescription: ''
      },
      isLoading: false
    };

    this.fetchAirQualityStats = this.fetchAirQualityStats.bind(this);
    this.fetchCurrentAirQualityStats = this.fetchCurrentAirQualityStats.bind(
      this
    );
    this.fetchWeeklyAirQualityStats = this.fetchWeeklyAirQualityStats.bind(
      this
    );
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let { city } = this.state;
    const { match } = this.props;
    if (match) {
      ({ city } = match.params);
    }

    this.fetchAirQualityStats(city);
  }

  fetchAirQualityStats(city) {
    this.fetchCurrentAirQualityStats(city);
    this.fetchWeeklyAirQualityStats(city);
  }

  fetchCurrentAirQualityStats(city) {
    const processJson = json => {
      let cityP2Stats = {};
      let cityTemperatureStats = {};
      let cityHumidityStats = {};
      if (json.count === 1) {
        cityP2Stats = json.results[0].P2 || {};
        cityTemperatureStats = json.results[0].temperature || {};
        cityHumidityStats = json.results[0].humidity || {};
      }
      cityP2Stats = formatCurrentP2Stats(cityP2Stats, true);
      cityTemperatureStats = formatCurrentP2Stats(cityTemperatureStats);
      cityHumidityStats = formatCurrentP2Stats(cityHumidityStats);
      this.setState(state => ({
        city,
        cityP2Stats,
        cityP2WeeklyStats: state.cityP2WeeklyStats,
        cityTemperatureStats,
        cityHumidityStats,
        isLoading: false
      }));
    };

    this.setState(state => ({
      city: state.city,
      isLoading: true,
      cityP2Stats: {
        average: '--',
        averageDescription: 'loading'
      },
      cityP2WeeklyStats: state.cityP2WeeklyStats,
      cityTemperatureStats: {},
      cityHumidityStats: {}
    }));
    fetch(`${SENSOR_READINGS_URL}?city=${city}`)
      .then(data => data.json())
      .then(json => processJson(json));
  }

  fetchWeeklyAirQualityStats(city) {
    const processJson = json => {
      let cityP2WeeklyStats = [];
      if (json.count === 1) {
        cityP2WeeklyStats = formatWeeklyP2Stats(json.results[0].P2 || []);
      }
      this.setState(state => ({
        city,
        cityP2Stats: state.cityP2Stats,
        cityP2WeeklyStats,
        cityTemperatureStats: state.cityTemperatureStats,
        cityHumidityStats: state.cityHumidityStats,
        isLoading: false
      }));
    };

    this.setState(state => ({
      city: state.city,
      isLoading: true,
      cityP2WeeklyStats: state.cityP2WeeklyStats,
      cityP2Stats: state.cityP2Stats,
      cityTemperatureStats: state.cityTemperatureStats,
      cityHumidityStats: state.cityHumidityStats
    }));
    const today = Date.now();

    // Substring date without time e.g. 2019-02-26
    const from = new Date(today - 7 * 24 * 3600 * 1000)
      .toISOString()
      .substr(0, 10);
    fetch(`${SENSOR_READINGS_URL}?city=${city}&from=${from}&value_type=P2`)
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
      this.fetchAirQualityStats(searchedCity);
    }
  }

  render() {
    const { classes, url } = this.props;
    const {
      city,
      isLoading,
      cityP2Stats = {},
      cityP2WeeklyStats = [],
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
          {cityP2WeeklyStats.length && (
            <QualityStatsGraph data={cityP2WeeklyStats} />
          )}
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

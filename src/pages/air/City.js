import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import SensorMap from '../../components/SensorMap';
import CityHeader from '../../components/City/Header/CityHeader';
import CallToAction from '../../components/City/CallToAction';
import PollutionStats from '../../components/City/PollutionStats';
import QualityStats from '../../components/City/SensorsQualityStats';

const DEFAULT_CITY = 'nairobi';
const CITIES_LOCATION = {
  nairobi: {
    latitude: '-1.',
    longitude: '36.',
    name: 'Nairobi',
    country: 'Kenya',
    label: 'Nairobi, Kenya',
    location: '9/-1.4272/36.8147'
  },
  lagos: {
    latitude: '6.',
    longitude: '3.',
    name: 'Lagos',
    country: 'Nigeria',
    label: 'Lagos, Nigeria',
    location: '6/3.162/7.976'
  },
  'dar-es-salaam': {
    latitude: '-6.',
    longitude: '39.',
    name: 'Dar es Salaam',
    country: 'Tanzania',
    label: 'Dar-es-salaam, Tanzania',
    location: '7/-6.937/36.793'
  }
};
const CITIES_POLLUTION_STATS = {
  nairobi: {
    deathCount: '43,862',
    childDeathCount: '10,628',
    topIllness: 'Acute Lower',
    annualAverage: '17',
    percent: '70% more'
  },
  lagos: {
    deathCount: '242,657',
    childDeathCount: '140,520',
    topIllness: 'Lower',
    annualAverage: '27',
    percent: '170% more'
  },
  'dar-es-salaam': {
    deathCount: '89,021',
    childDeathCount: '17,624',
    topIllness: 'Lower',
    annualAverage: '23',
    percent: '130% more'
  }
};
const POLLUTION_SENSOR_NAMES = ['sds021', 'sds011', 'ppd42ns'];
const HUMIDITY_SENSOR_NAMES = ['dht22', 'dht11'];
const TEMPERATURE_SENSOR_NAMES = ['dht22'];
const SENSOR_READINGS_URL = 'https://api.airquality.codeforafrica.org/v1/now/';

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

class City extends React.Component {
  constructor() {
    super();
    this.state = {
      city: DEFAULT_CITY,
      isLoading: false,
      cityAirPol: 0
    };
    this.fetchCityReadings = this.fetchCityReadings.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    let { city } = this.state;
    const { location } = this.props;
    if (location.state && location.state.city) {
      ({ city } = location.state);
    }

    this.fetchCityReadings(city);
  }

  fetchCityReadings(city) {
    const isInCity = reading => {
      const { location } = reading;
      return (
        location.latitude.startsWith(CITIES_LOCATION[city].latitude) &&
        location.longitude.startsWith(CITIES_LOCATION[city].longitude)
      );
    };

    const isAirSensorWithPollutionReadings = ({ sensor, sensordatavalues }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return (
        POLLUTION_SENSOR_NAMES.indexOf(name) !== -1 &&
        sensordatavalues.length >= 2
      );
    };

    const isAirSensorWithHumidityReadings = ({ sensor, sensordatavalues }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return (
        HUMIDITY_SENSOR_NAMES.indexOf(name) !== -1 &&
        sensordatavalues.length >= 2
      );
    };

    const isAirSensorWithTemperatureReadings = ({
      sensor,
      sensordatavalues
    }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return (
        TEMPERATURE_SENSOR_NAMES.indexOf(name) !== -1 &&
        sensordatavalues.length >= 2
      );
    };
    const averageP2ValuesPerSensor = (
      accumulator,
      { sensor, sensordatavalues }
    ) => {
      const { id } = sensor;
      accumulator[id] = accumulator[id] || { average: 0.0, length: 0 };
      sensordatavalues.forEach(({ value_type: valueType = '', value }) => {
        if (valueType.toLowerCase() === 'p2') {
          const reading = accumulator[id];
          const { average, length } = reading;
          reading.length = length + 1;
          reading.average = (average + parseFloat(value)) / reading.length;
        }
      });
      return accumulator;
    };
    const averageP2ValuesForCity = accumulator => {
      const readings = Object.values(accumulator);
      const cityAverage =
        readings.reduce((a, b) => a + b.average, 0) / readings.length;
      return cityAverage;
    };
    const averageTemperatureValuesPerSensor = (
      accumulator,
      { sensor, sensordatavalues }
    ) => {
      const { id } = sensor;
      accumulator[id] = accumulator[id] || { average: 0.0, length: 0 };
      sensordatavalues.forEach(({ value_type: valueType = '', value }) => {
        if (valueType.toLowerCase() === 'temperature') {
          const reading = accumulator[id];
          const { average, length } = reading;
          reading.length = length + 1;
          reading.average = (average + parseFloat(value)) / reading.length;
        }
      });
      return accumulator;
    };
    const averageHumidityValuesPerSensor = (
      accumulator,
      { sensor, sensordatavalues }
    ) => {
      const { id } = sensor;
      accumulator[id] = accumulator[id] || { average: 0.0, length: 0 };
      sensordatavalues.forEach(({ value_type: valueType = '', value }) => {
        if (valueType.toLowerCase() === 'humidity') {
          const reading = accumulator[id];
          const { average, length } = reading;
          reading.length = length + 1;
          reading.average = (average + parseFloat(value)) / reading.length;
        }
      });
      return accumulator;
    };

    this.setState(state => ({
      city: state.city,
      cityAirPol: state.cityAirPol,
      isLoading: true,
      cityP2Stats: state.cityP2Stats,
      cityTemperatureStats: state.cityTemperatureStats,
      cityHumidityStats: state.cityHumidityStats
    }));

    let cityP2Stats = {};
    let cityTemperatureStats = {};
    let cityHumidityStats = {};

    fetch(SENSOR_READINGS_URL)
      .then(data => data.json())
      .then(readings => {
        cityP2Stats = readings
          .filter(
            data => isInCity(data) && isAirSensorWithPollutionReadings(data)
          )
          .reduce(averageP2ValuesPerSensor, {});

        cityTemperatureStats = readings
          .filter(
            data => isInCity(data) && isAirSensorWithTemperatureReadings(data)
          )
          .reduce(averageTemperatureValuesPerSensor, {});

        cityHumidityStats = readings
          .filter(
            data => isInCity(data) && isAirSensorWithHumidityReadings(data)
          )
          .reduce(averageHumidityValuesPerSensor, {});

        return Promise.resolve(cityP2Stats);
      })
      .then(averageP2ValuesForCity)
      .then(reading => {
        this.setState({
          city,
          cityAirPol: parseFloat(reading.toFixed(2)),
          isLoading: false,
          cityP2Stats,
          cityTemperatureStats,
          cityHumidityStats
        });
      });
  }

  handleSearch(option) {
    const city = (option && option.value) || DEFAULT_CITY;
    this.fetchCityReadings(city);
  }

  render() {
    const { classes, url } = this.props;
    const {
      city,
      cityAirPol: airPol,
      isLoading,
      cityP2Stats,
      cityHumidityStats,
      cityTemperatureStats
    } = this.state;

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
            airPol={airPol}
            handleSearch={this.handleSearch}
          />
          <Grid item xs={12}>
            <PollutionStats
              pollutionStats={CITIES_POLLUTION_STATS[city]}
              city={CITIES_LOCATION[city]}
            />
          </Grid>
          <Grid item xs={12}>
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
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(City));

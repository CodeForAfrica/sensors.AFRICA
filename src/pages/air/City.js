import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import KenyaMap from '../../components/Maps/Kenya';
import NigeriaMap from '../../components/Maps/Nigeria';
import TanzaniaMap from '../../components/Maps/Tanzania';
import Neighbourhood from '../../components/CityComponents/Neighbourhood';
import CityHeader from '../../components/CityComponents/Header/CityHeader';
import CallToAction from '../../components/CityComponents/CallToAction';
import HostSensor from '../../components/CityComponents/HostSensors';
import QualityStats from '../../components/CityComponents/SensorsQualityStats/QualityStats';
import PollutionStats from '../../components/CityComponents/PollutionStats';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  contained: {
    width: 'auto',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '970px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '1170px'
    }
  },
  separator: {
    color: 'rgba(0, 0, 0, 0.2)'
  }
});

const DEFAULT_CITY = { value: 'nairobi', label: 'Nairobi, Kenya' };
const CITIES_LOCATION = {
  nairobi: {
    latitude: '-1.',
    longitude: '36.',
    label: 'Nairobi, Kenya'
  },
  lagos: {
    latitude: '6.',
    longitude: '3.',
    label: 'Lagos, Nigeria'
  },
  'dar-es-salaam': {
    latitude: '-6.',
    longitude: '39.',
    label: 'Dar-es-salaam, Tanzania'
  }
};
const POLLUTION_SENSOR_NAMES = ['sds021', 'sds011', 'ppd42ns']
const HUMIDITY_SENSOR_NAMES= [ 'dht22', 'dht11'];
const SENSOR_READINGS_URL = 'http://api.airquality.codeforafrica.org/v1/now/';

class City extends Component {
  constructor() {
    super();
    this.state = {
      city: DEFAULT_CITY,
      isLoading: false,
      cityAirPol: 0
    };
    this.fetchCityReadings = this.fetchCityReadings.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        location.latitude.startsWith(CITIES_LOCATION[city.value].latitude) &&
        location.longitude.startsWith(CITIES_LOCATION[city.value].longitude)
      );
    };
    const isAirSensorWithPollutionReadings = ({ sensor, sensordatavalues }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return POLLUTION_SENSOR_NAMES.indexOf(name) !== -1 && sensordatavalues.length >= 2;
    };
    const isAirSensorWithHumidityReadings = ({ sensor, sensordatavalues }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return HUMIDITY_SENSOR_NAMES.indexOf(name) !== -1 && sensordatavalues.length >= 2;
    };
    const averageP1ValuesPerSensor = (
      accumulator,
      { sensor, sensordatavalues }
    ) => {
      const { id } = sensor;
      accumulator[id] = accumulator[id] || { average: 0.0, length: 0 };
      sensordatavalues.forEach(({ value_type: valueType = '', value }) => {
        if (valueType.toLowerCase() === 'p1') {
          const reading = accumulator[id];
          const { average, length } = reading;
          reading.length = length + 1;
          reading.average = (average + parseFloat(value)) / reading.length;
        }
      });
      return accumulator;
    }
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
    }
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
        readings.filter(a => {
          return a.length > 0;
        }).reduce((a, b) => a + b.average, 0) / readings.length;
      return cityAverage;
    };
    this.setState(state => {
      return {
        city: state.city,
        cityAirPol: state.cityAirPol,
        isLoading: true,
        // cityP1Stats: state.cityP1Stats,
        // cityP2Stats: state.cityP2Stats,
        // cityHumidityStats: state.cityHumidityStats
      };
    });

    let cityP1Stats = {}
    let cityP2Stats = {}
    let cityHumidityStats = {}

    fetch(SENSOR_READINGS_URL)
      .then(data => data.json())
      .then(readings => {
        const p2cells = readings
          .filter(data => isInCity(data) && isAirSensorWithPollutionReadings(data))
          .reduce(averageP2ValuesPerSensor, {});

        const p1cells = readings
          .filter(data => isInCity(data) && isAirSensorWithPollutionReadings(data))
          .reduce(averageP1ValuesPerSensor, {});

        const humiditycells = readings
          .filter(data => isInCity(data) && isAirSensorWithHumidityReadings(data))
          .reduce(averageHumidityValuesPerSensor, {});

        cityP1Stats = p1cells;
        cityP2Stats = p2cells;
        cityHumidityStats = humiditycells;

        return Promise.resolve(p2cells);
      })
      .then(averageP2ValuesForCity)
      .then(reading => {
        this.setState({
          city,
          cityAirPol: reading.toFixed(2),
          isLoading: false,
          // cityP1Stats: cityP1Stats,
          // cityP2Stats: cityP2Stats,
          // cityHumidityStats: cityHumidityStats
        });
      });
  }

  handleChange(option) {
    const city = option || DEFAULT_CITY;
    this.fetchCityReadings(city);
  }

  render() {
    const { classes } = this.props;
    const { city, cityAirPol: airPol, isLoading } = this.state;
    let Map = KenyaMap;
    if (city.value === 'dar-es-salaam') {
      Map = TanzaniaMap;
    } else if (city.value === 'lagos') {
      Map = NigeriaMap;
    }
    return (
      <Grid
        container
        className={classes.root}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          {isLoading && <LinearProgress />}
          <CityHeader
            city={city}
            airPol={airPol}
            handleChange={this.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.contained}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <HostSensor />
            </Grid>
            <Grid item xs={12}>
              <hr className={classes.separator} />
            </Grid>
            <Grid item xs={12}>
              <PollutionStats />
            </Grid>
            <Grid item xs={12}>
              <Neighbourhood />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Map />
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.contained}
            justify="center"
            alignItems="center"
            style={{marginTop: "50px"}}
          >
            <Grid item xs={12}>
              <CallToAction />
            </Grid>
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
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

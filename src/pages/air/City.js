import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import KenyaMap from '../../components/Maps/Kenya';
import NigeriaMap from '../../components/Maps/Nigeria';
import TanzaniaMap from '../../components/Maps/Tanzania';
import CityHeader from '../../components/CityComponents/Header/CityHeader';
import CallToAction from '../../components/CityComponents/CallToAction';
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
const SENSOR_NAMES = ['sds021', 'sds011'];
const SENSOR_READINGS_URL = 'https://api.airquality.codeforafrica.org/v1/now/';

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
    const isAirSensorWithReadings = ({ sensor, sensordatavalues }) => {
      let { name = '' } = sensor.sensor_type;
      name = name.toLowerCase();
      return SENSOR_NAMES.indexOf(name) !== -1 && sensordatavalues.length >= 2;
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

    this.setState(state => {
      return {
        city: state.city,
        cityAirPol: state.cityAirPol,
        isLoading: true
      };
    });
    fetch(SENSOR_READINGS_URL)
      .then(data => data.json())
      .then(readings => {
        const cells = readings
          .filter(data => isInCity(data) && isAirSensorWithReadings(data))
          .reduce(averageP2ValuesPerSensor, {});
        return Promise.resolve(cells);
      })
      .then(averageP2ValuesForCity)
      .then(reading => {
        this.setState({
          city,
          cityAirPol: reading.toFixed(2),
          isLoading: false
        });
      });
  }

  handleChange(option) {
    const city = option || DEFAULT_CITY;
    this.fetchCityReadings(city);
  }

  render() {
    const { city, cityAirPol: airPol, isLoading } = this.state;
    let Map = KenyaMap;
    if (city.value === 'dar-es-salaam') {
      Map = TanzaniaMap;
    } else if (city.value === 'lagos') {
      Map = NigeriaMap;
    }
    return (
      <React.Fragment>
        <Navbar />
        {isLoading && <LinearProgress />}
        <CityHeader
          city={city}
          airPol={airPol}
          handleChange={this.handleChange}
        />
        <PollutionStats />
        <Map />
        <CallToAction />
        <Footer />
      </React.Fragment>
    );
  }
}

City.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

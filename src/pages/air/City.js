import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { Grid, LinearProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import KenyaMap from '../../components/Maps/Kenya';
import NigeriaMap from '../../components/Maps/Nigeria';
import TanzaniaMap from '../../components/Maps/Tanzania';
import CityHeader from '../../components/CityComponents/Header/CityHeader';
import CallToAction from '../../components/CityComponents/CallToAction';
import PollutionStats from '../../components/CityComponents/PollutionStats';
import QualityStats from '../../components/CityComponents/SensorsQualityStats/QualityStats';

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

const styles = () => ({
  root: {
    flexGrow: 1,

    // TODO(kilemensi): This is hack to force the page to be 100% wide w/o
    //                  horizontal scrollbars.
    position: 'absolute',
    top: 0,
    left: 0
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

    this.setState(state => ({
      city: state.city,
      cityAirPol: state.cityAirPol,
      isLoading: true
    }));
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
          cityAirPol: parseFloat(reading.toFixed(2)),
          isLoading: false
        });
      });
  }

  handleSearch(option) {
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
            handleSearch={this.handleSearch}
          />
          <Grid item xs={12}>
            <PollutionStats />
          </Grid>
          <Grid item xs={12}>
            <Map />
          </Grid>
          <Grid item xs={12}>
            <QualityStats />
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
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

import Grid from '@material-ui/core/Grid';
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
    flexGrow: 1
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

const CITY_PATHNAME = '/air/city/';
const DEFAULT_CITY = { value: 'nairobi', label: 'Nairobi, Kenya' };
const CITIES_LOCATION = {
  'nairobi': {
    latitude: "-1.",
    longitude: "36.",
    label: "Nairobi, Kenya"
  },
  'lagos': {
    latitude: "6.",
    longitude: "3.",
    label: "Lagos, Nigeria"
  },
  'dar-es-salaam': {
    latitude: "-6.",
    longitude: "39.",
    label: "Dar-es-salaam, Tanzania"
  }
}
class City extends Component {
  constructor() {
    super();
    this.state = {
      city: DEFAULT_CITY,
    }
   this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const city = this.props.location.state.city || DEFAULT_CITY;
    fetch('http://api.airquality.codeforafrica.org/v1/now/')
    .then(results => {
      return results.json();
    }).then(data => {
      let cells = data.filter((sensor) =>
          sensor.location.latitude.startsWith(CITIES_LOCATION[city.value].latitude) &&
          sensor.location.longitude.startsWith(CITIES_LOCATION[city.value].longitude) && (
          (sensor.sensor.sensor_type.name === "SDS021" && sensor.sensordatavalues.length >= 2) ||
          (sensor.sensor.sensor_type.name === 'SDS011' && sensor.sensordatavalues.length >= 2))
        ).reduce((sensorGroup, {sensor, sensordatavalues}) => {
          if (!sensorGroup[sensor.id]) sensorGroup[sensor.id] = [];
            sensordatavalues.map(val => {
              if(val.value_type === "P2") {
                sensorGroup[sensor.id].push(parseFloat(val.value));
              }
            });
            return sensorGroup
          }, {});
      return Promise.resolve(cells);
    }).then((cells) => {
          for (const [key, value] of Object.entries(cells)) {
             cells[key] = ((cells[key].reduce((a,b) => a+b))/(cells[key]).length).toFixed(2);
           }
          return cells;
    }).then(value => {
      this.setState((state) => {
        return { city: city,
                 cityAirPol: (((Object.values(value)).reduce((a, b) =>
          { return parseFloat(a) + parseFloat(b) }, 0))/(Object.values(value)).length).toFixed(2)
        }
      });
    });

  }

  handleChange(option) {
    const city = option || DEFAULT_CITY;
    fetch('http://api.airquality.codeforafrica.org/v1/now/')
    .then(results => {
      return results.json();
    }).then(data => {
      let cells = data.filter((sensor) =>
          sensor.location.latitude.startsWith(CITIES_LOCATION[city.value].latitude) &&
          sensor.location.longitude.startsWith(CITIES_LOCATION[city.value].longitude) && (
          (sensor.sensor.sensor_type.name === "SDS021" && sensor.sensordatavalues.length >= 2) ||
          (sensor.sensor.sensor_type.name === 'SDS011' && sensor.sensordatavalues.length >= 2))
        ).reduce((sensorGroup, {sensor, sensordatavalues}) => {
          if (!sensorGroup[sensor.id]) sensorGroup[sensor.id] = [];
            sensordatavalues.map(val => {
              if(val.value_type === "P2") {
                sensorGroup[sensor.id].push(parseFloat(val.value));
              }
            });
            return sensorGroup
          }, {});
      return Promise.resolve(cells);
    }).then((cells) => {
          for (const [key, value] of Object.entries(cells)) {
             cells[key] = ((cells[key].reduce((a,b) => a+b))/(cells[key]).length).toFixed(2);
           }
          return cells;
    }).then(value => {
      this.setState((state) => {
        return { city: city,
                 cityAirPol: (((Object.values(value)).reduce((a, b) =>
          { return parseFloat(a) + parseFloat(b) }, 0))/(Object.values(value)).length).toFixed(2)
        }
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { city } = this.state;
    const airPol = this.state.cityAirPol;
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
          >
            <Grid item xs={12}>
              <QualityStats />
            </Grid>
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
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

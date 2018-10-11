import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from "react-router";

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import _ from 'lodash';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import KenyaMap from '../../components/Maps/KenyaMap';
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

const location = {
  'nairobi': {
    latitude: -1.2833,
    longitude: 36.8167
  },
  'lagos': {
    latitude: -1.2833,
    longitude: 36.8167
  },
  'dar-es-salaam': {
    latitude: -6.8,
    longitude: 39.283333
  }
}
class City extends Component {
  constructor() {
    super();
    this.state = {
      city: {value: 'nairobi', label: 'Nairobi, Kenya'}
    }
  }

  componentDidMount() {
    let sensorsCityData = fetch('http://api.airquality.codeforafrica.org/v1/now/')
    .then(results => {
      return results.json();
    }).then(data => {
      let cells = data.filter((sensor) =>
          sensor.location.latitude !== null &&
          sensor.location.longitude !== null && (
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
    });
  }

  render() {
    const classes = this.props.classes;
    //default city
    var cityObject = {value: "nairobi", label: "Nairobi, Kenya"}
    var cityAirPol = 17

    if(this.props.location.state) {
      cityObject = this.props.location.state['cityObj'];
      cityAirPol = this.props.location.state['cityAirPolLevel']
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
          <CityHeader city={cityObject} airPol={cityAirPol}/>
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
          <KenyaMap />
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
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

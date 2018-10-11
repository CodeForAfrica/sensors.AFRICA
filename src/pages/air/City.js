import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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

function City({ classes, location }) {
  // default city
  let cityObject = { value: 'nairobi', label: 'Nairobi, Kenya' };
  let cityAirPol = 17;

  if (location.state) {
    cityObject = location.state.cityObj;
    cityAirPol = location.state.cityAirPolLevel;
  }
  let Map = KenyaMap;
  if (cityObject.value === 'dar-es-salaam') {
    Map = TanzaniaMap;
  } else if (cityObject.value === 'lagos') {
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
        <CityHeader city={cityObject} airPol={cityAirPol} />
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

City.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(City));

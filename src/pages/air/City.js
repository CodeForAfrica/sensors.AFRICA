import React from 'react';
import PropTypes from 'prop-types';

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

// TODO: needs to be pulled from an api
const CITY_POLLUTION_LEVELS = {
  nairobi: 17,
  lagos: 20,
  'dar-es-salaam': 18
};

class City extends React.Component {
  constructor(props) {
    super(props);

    this.state = { city: DEFAULT_CITY };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    if (location.state && location.state.city) {
      const { city } = location.state;
      this.setState({ city });
    }
  }

  handleChange(option) {
    const city = option || DEFAULT_CITY;
    this.setState({ city });
  }

  render() {
    const { city } = this.state;
    const airPol = CITY_POLLUTION_LEVELS[city.value];
    const { classes } = this.props;

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

        <Grid
          item
          xs={12}
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

        <Grid item xs={12}>
          <Map />
        </Grid>

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
    );
  }
}

City.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withStyles(styles)(City);

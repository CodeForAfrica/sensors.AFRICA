import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SDS011 from '../../assets/images/sensors/sensor1.jpg';
import DHT22 from '../../assets/images/sensors/sensor2.jpg';
import GSMSIM800L from '../../assets/images/sensors/sensor3.jpg';
import NODEMCU from '../../assets/images/sensors/sensor4.jpg';

const styles = {
  root: {
    paddingRight: '10%',
    paddingLeft: '10%'
  },
  titleSection: {
    paddingBottom: '1rem',
    textAlign: 'center'
  },
  title: {
    color: 'green',
    paddingTop: '2rem'
  },
  subheading: {
    color: '#424143'
  },
  caption: {
    textAlign: 'center',
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingBottom: '2rem'
  },
  img: {
    height: '300px',
    width: 'auto'
  }
};

class HardwareInfo extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        spacing={24}
        diection="row"
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          container
          item
          xs={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={classes.titleSection}>
            <img src={SDS011} alt="SDS011" className={classes.img} />
            <Typography variant="title" className={classes.title}>
              SDS011
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              Particulate matter Sensor
            </Typography>
          </div>
          <Typography variant="caption" className={classes.caption}>
            The sensors is used to measure PM10 and PM2.5 particles for
            concentration ranes between 0-999ug/m3.It usess laser scattering
            principle to get particles concentration between0.3 to 10ug in the
            air. Air gets inthrough the pitot inlet, then it passes through the
            detection area before being ejected from the senors through the
            built fan. Laser scattering can be induced when particles go through
            the the detection area.The scattered light is transformed into
            electrical signals and these signals will be amplified and
            processed. The number and diameteer of particles can be obtained by
            analysis because the signal waveform has certain relations with the
            partice diameter. It has a response time of 10 seconds with a change
            of scene, making data collectiction near real time.
          </Typography>
          <div className={classes.titleSection}>
            <img src={DHT22} alt="DHT22" className={classes.img} />
            <Typography variant="title" className={classes.title}>
              DHT22
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              Temperature and Humidity Sensor
            </Typography>
          </div>
          <Typography variant="caption" className={classes.caption}>
            The sensors is used to measure temperator and the humidity.It uses a
            capacitative humidity sensor and a themostat to measure the
            surrounding air, and spits out a digital signal on the data pin.
          </Typography>
        </Grid>

        <Grid
          container
          item
          xs={6}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={classes.titleSection}>
            <img src={NODEMCU} alt="SDSNODEMCU011" className={classes.img} />
            <Typography variant="title" className={classes.title}>
              NODE MCU
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              Microcontroller
            </Typography>
          </div>
          <Typography variant="caption" className={classes.caption}>
            The NodeMCU is an open source software and hardware development
            environment. This is the mini computer that reads data from and
            controls the sensors. Unlike other microcontrollers, it has a wifi
            module onboard making communication of IoT projects a breeze. With
            4mb of RAM it rates highter than other boards in its class.
          </Typography>
          <div className={classes.titleSection}>
            <img src={GSMSIM800L} alt="GSMSIM800L" className={classes.img} />
            <Typography variant="title" className={classes.title}>
              GSM SIM800L
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              Communication
            </Typography>
          </div>
          <Typography variant="caption" className={classes.caption}>
            The SIM800L is a low cost cell-pone module. It supports quad-band
            GSM/GPRRS network and is available for GPRS and SMS message data
            remote transmission. The board features compact size and low current
            consumption. With power saving technique,the current consumption is
            as low as 1mA mode.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

HardwareInfo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HardwareInfo);

import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SDS011 from 'assets/images/sensors/sensor1.jpg';
import DHT22 from 'assets/images/sensors/DHT22.jpeg';
import GSMSIM800L from 'assets/images/sensors/GSMSIM800L.jpg';
import GSMSIM800H from 'assets/images/sensors/GSMSIM800H.jpeg';
import NODEMCU from 'assets/images/sensors/NODEMCU.jpeg';
import SIGFOX from 'assets/images/sensors/SIGFOX.jpeg';
import PMS5003 from 'assets/images/sensors/PMS5003.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingRight: '10%',
      paddingLeft: '10%',
    },
  },
  column: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '23rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '31rem',
    },
  },
  titleSection: {
    paddingBottom: '1rem',
    textAlign: 'center',
  },
  title: {
    color: 'green',
    paddingTop: '2rem',
  },
  subheading: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
  caption: {
    textAlign: 'center',
    // paddingLeft: '20%',
    // paddingRight: '20%',
    paddingBottom: '2rem',
    // textAlign: 'justify'
  },
  captionGrid: {
    marginRight: '3.5rem',
    marginLeft: '3.5rem',
    textAlign: 'center',
    paddingBottom: '2rem',
  },
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  subtitle1: {
    textAlign: 'center',
    paddingTop: '2.5rem',
    backgroundColor: 'white',
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
}));

function HardwareInfo() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.subtitle1}>
          THE SCIENCE AND HARDWARE
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={24}
        justify="space-around"
        alignItems="center"
      >
        {/* First Column */}
        <Grid
          item
          className={classes.column}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* Content Grid */}
          <Grid item xs={12} className={classes.titleSection}>
            <img src={SDS011} alt="SDS011" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              SDS011
            </Typography>
            <Typography className={classes.subheading}>
              Particulate matter Sensor
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              This sensor is used to measure PM10 and PM2.5 particles for
              concentration ranges between 0-999µg/m3. It uses laser scattering
              principle to get particles concentration between 0.3 to 10ug in
              the air. Air gets in through the pitot inlet, then it passes
              through the detection area before being ejected from the sensors
              through the built fan. Laser scattering can be induced when
              particles go through the detection area. The scattered light is
              transformed into electrical signals and these signals will be
              amplified and processed. The number and diameter of particles can
              be obtained by analysis because the signal waveform has certain
              relations with the particle diameter. It has a response time of 10
              seconds with a change of scene, making data collection near real
              time.
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.titleSection}>
            <img src={DHT22} alt="DHT22" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              DHT22
            </Typography>
            <Typography className={classes.subheading}>
              Temperature and Relative Humidity Sensor
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              The sensor is used to measure temperature and the humidity. It
              uses a capacitive humidity sensor and a thermostat to measure the
              surrounding air, and spits out a digital signal on the data pin.
            </Typography>
          </Grid>
        </Grid>

        {/* Second column  */}
        <Grid
          item
          className={classes.column}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.titleSection}>
            <img src={NODEMCU} alt="SDSNODEMCU011" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              NODE MCU
            </Typography>
            <Typography className={classes.subheading}>
              Microcontroller
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              The NodeMCU is an open source software and hardware development
              environment. This is the mini computer that reads data from and
              controls the sensors. Unlike other microcontrollers, it has a wifi
              module onboard making communication of IoT projects a breeze. With
              4mb of RAM, it rates higher than other boards in its class.
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.titleSection}>
            <img src={GSMSIM800L} alt="GSMSIM800L" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              GSM SIM800L
            </Typography>
            <Typography className={classes.subheading}>
              Communication
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              The SIM800L is a low-cost cell-phone module. It supports quad-band
              GSM/GPRS network and is available for GPRS and SMS message data
              remote transmission. The board features compact size and low
              current consumption. With power saving technique, the current
              consumption is as low as 1mA mode.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={24}
        justify="space-around"
        alignItems="center"
      >
        {/* Third Column */}
        <Grid
          item
          className={classes.column}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {/* Content Grid */}
          <Grid item xs={12} className={classes.titleSection}>
            <img src={PMS5003} alt="SDS011" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              PMS5003
            </Typography>
            <Typography className={classes.subheading}>
              Particulate matter Sensor
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              This sensor is used to measure PM1, PM10 and PM2.5 particles. It
              uses laser scattering principle to get particle concentration from
              0.3 µg in the air, i.e by scattering using a laser to radiate
              suspending particles in the air, then collect scattering light in
              a certain degree, and finally obtain the curve of scattering light
              change with time. In the end, equivalent particle diameter and the
              number of particles with different diameter per unit volume can be
              calculated by microprocessor based on MIE theory.
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.titleSection}>
            <img src={GSMSIM800H} alt="GSMSIM800H" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              GSMSIM800H
            </Typography>
            <Typography className={classes.subheading}>
              Communication
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              The SIM800H connects to any global GSM network, using 2G SIMs. It
              can be used to send and receive SMS messages, make and receive
              voice calls, send and receive GPRS data and has an AT command
              interface. This module has an onboard LIPO charging circuitry that
              enables you to charge it via USB on the go.
            </Typography>
          </Grid>
        </Grid>

        {/* Fourth column  */}
        <Grid
          item
          className={classes.column}
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} className={classes.titleSection}>
            <img src={SIGFOX} alt="SIGFOX" className={classes.img} />
            <Typography variant="h6" className={classes.title}>
              SIGFOX
            </Typography>
            <Typography className={classes.subheading}>
              Communication
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.captionGrid}>
            <Typography variant="caption" className={classes.caption}>
              Sigfox is a low power wide area network, ( LPWAN), whose current
              standards support upto 140 uplink messages, each of which can
              carry a payload of 12 octets and at a rate of upto of 100 bits per
              second. The technology uses a radio-based network.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HardwareInfo;

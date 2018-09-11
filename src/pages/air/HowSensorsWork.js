import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Navbar from '../../components/Header/Navbar';
import HeaderIndex from '../../components/SensorsInfo/HeaderIndex';
import Footer from '../../components/Footer';

import HardwareInfo from '../../components/SensorsInfo/HardwareInfo';

class HowSensorsWork extends Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <HeaderIndex />
        <Typography variant="subheading" style={{ textAlign: 'center', paddingTop: '2rem' }}>THE SCIENCE AND HARDWARE</Typography>
        <HardwareInfo />
        <Footer />
      </Grid>
    );
  }
}

export default HowSensorsWork;
import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import HeaderIndex from '../../components/SensorsInfo/HardwareHeader';
import HardwareInfo from '../../components/SensorsInfo/HardwareInfo';
import Footer from '../../components/Footer';

function HowSensorsWork() {
  return (
    <Grid>
      <Navbar />
      <HeaderIndex />
      <Typography
        variant="subtitle1"
        style={{ textAlign: 'center', paddingTop: '2rem' }}
      >
        THE SCIENCE AND HARDWARE
      </Typography>
      <HardwareInfo />
      <Footer />
    </Grid>
  );
}

export default HowSensorsWork;

import React from 'react';

import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import HeaderIndex from '../../components/SensorsInfo/HardwareHeader';
import HardwareInfo from '../../components/SensorsInfo/HardwareInfo';
import Footer from '../../components/Footer';

function HowSensorsWork() {
  return (
    <Grid>
      <Navbar />
      <HeaderIndex />
      <HardwareInfo />
      <Footer />
    </Grid>
  );
}

export default HowSensorsWork;

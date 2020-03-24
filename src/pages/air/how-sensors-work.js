import React from 'react';

import { Grid } from '@material-ui/core';

import Navbar from 'components/Header/Navbar';
import HeaderIndex from 'components/SensorsInfo/HardwareHeader';
import HardwareInfo from 'components/SensorsInfo/HardwareInfo';
import PartnerLogos from 'components/PartnerLogos';
import Footer from 'components/Footer';

function HowSensorsWork() {
  return (
    <Grid>
      <Navbar />
      <HeaderIndex />
      <HardwareInfo />
      <PartnerLogos />
      <Footer />
    </Grid>
  );
}

export default HowSensorsWork;

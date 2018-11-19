import React from 'react';

import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import HeaderIndex from '../../components/SensorsInfo/HardwareHeader';
import HardwareInfo from '../../components/SensorsInfo/HardwareInfo';
import Footer from '../../components/Footer';
import Seo from '../../components/MetaTags/Seo';
import GreenFavicon from '../../components/Favicons/GreenFavicon';

function HowSensorsWork() {
  return (
    <Grid>
      <Seo url="air/how-sensors-work" />
      <GreenFavicon />
      <Navbar />
      <HeaderIndex />
      <HardwareInfo />
      <Footer />
    </Grid>
  );
}

export default HowSensorsWork;

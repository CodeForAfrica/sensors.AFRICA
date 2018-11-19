import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Header from '../../components/HealthClimate/HealthAndClimateHeader';
import Impact from '../../components/HealthClimate/HealthAndClimateImpact';
import Sources from '../../components/HealthClimate/Sources';
import HealthAndDiseaseBurden from '../../components/HealthClimate/HealthAndDiseaseBurden';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';
import Footer from '../../components/Footer';

function HealthAndClimateImpacts() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <Impact />
      <Sources />
      <HealthAndDiseaseBurden />
      <Stories />
      <Support />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpacts;

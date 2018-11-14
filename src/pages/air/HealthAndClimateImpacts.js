import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import HealthAndClimateImpact from '../../components/HealthClimate/HealthAndClimateImpact';
import Sources from '../../components/HealthClimate/Sources';
import HealthAndBurden from '../../components/HealthClimate/HealthAndBurden';
import Support from '../../components/Support';
import Stories from '../../components/About/Stories';

function HealthAndClimateImpacts() {
  return (
    <Grid>
      <Navbar />
      <HealthAndClimateImpact />
      <Sources />
      <HealthAndBurden />
      <Stories />
      <Support />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpacts;

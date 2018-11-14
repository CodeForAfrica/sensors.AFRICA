import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Header from '../../components/HealthClimate/HealthAndClimateHeader';
import Impact from '../../components/HealthClimate/HealthAndClimateImpact';
import Sources from '../../components/HealthClimate/Sources';
import HealthAndBurden from '../../components/HealthClimate/HealthAndBurden';
import Support from '../../components/Support';
import Stories from '../../components/About/Stories';
import Footer from '../../components/Footer';


function HealthAndClimateImpacts() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <Impact />
      <Sources />
      <HealthAndBurden />
      <Stories />
      <Support />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpacts;

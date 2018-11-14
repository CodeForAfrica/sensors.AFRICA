import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Header from '../../components/HealthClimate/HealthAndClimateHeader';
import Impact from '../../components/HealthClimate/HealthAndClimateImpact';
import Sources from '../../components/HealthClimate/Sources';
import Burden from '../../components/HealthClimate/HealthAndBurden';
import Footer from '../../components/Footer';

function HealthAndClimateImpacts() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <Impact />
      <Sources />
      <Burden />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpacts;

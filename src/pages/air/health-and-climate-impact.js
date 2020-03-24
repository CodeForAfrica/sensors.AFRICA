import React from 'react';

import { Grid } from '@material-ui/core';

import Navbar from 'components/Header/Navbar';
import Header from 'components/HealthClimate/HealthAndClimateHeader';
import Impact from 'components/HealthClimate/HealthAndClimateImpact';
import Sources from 'components/HealthClimate/Sources';
import HealthAndDiseaseBurden from 'components/HealthClimate/HealthAndDiseaseBurden';
import Stories from 'components/About/Stories';
import Support from 'components/Support';
import PartnerLogos from 'components/PartnerLogos';
import Footer from 'components/Footer';

function HealthAndClimateImpact() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <HealthAndDiseaseBurden />
      <Sources />
      <Impact />
      <Stories />
      <Support />
      <PartnerLogos />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpact;

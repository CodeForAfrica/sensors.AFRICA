import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import Sources from '../../components/HealthClimateComponents/Sources';
import HealthAndBurden from '../../components/HealthClimateComponents/HealthAndBurden';

function HealthClimateLanding() {
  return (
    <Grid>
      <Navbar />
      <Sources />
      <HealthAndBurden />
      <Footer />
    </Grid>
  );
}

export default HealthClimateLanding;

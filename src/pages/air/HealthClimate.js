import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import Sources from '../../components/HealthClimate/Sources';
import HealthAndBurden from '../../components/HealthClimate/HealthAndBurden';

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

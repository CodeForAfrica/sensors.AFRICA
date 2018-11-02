import React from 'react';
import { Grid } from '@material-ui/core';

import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import SourcesInfo from '../../components/HealthClimateComponents/SourcesInfo';
import HealthClimateCards from '../../components/HealthClimateComponents/HealthClimateCards';

function HealthClimateLanding() {
  return (
    <Grid>
      <Navbar />
      <HealthClimateCards />
      <SourcesInfo />
      <Footer />
    </Grid>
  );
}

export default HealthClimateLanding;

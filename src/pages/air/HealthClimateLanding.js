import React from 'react';
import { Grid } from '@material-ui/core';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import SourcesInfo from '../../components/HealthClimateComponents/SourcesInfo';
import HealthClimateHeader from '../../components/HealthClimateComponents/HealthClimateHeader';

function HealthClimateLanding() {
  return (
    <Grid>
      <Navbar />
      <HealthClimateHeader />
      <SourcesInfo />
      <Footer />
    </Grid>
  );
}

export default HealthClimateLanding;

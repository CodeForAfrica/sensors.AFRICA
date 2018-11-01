import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

//Third party imports
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer';
import SourcesInfo from '../../components/HealthClimateImpact/SourcesInfo';

class HealthClimateLanding extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Navbar />
        <SourcesInfo />
        <Footer />
      </Grid>
    );
  }
}

export default HealthClimateLanding;

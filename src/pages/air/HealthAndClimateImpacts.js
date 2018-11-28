import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import DocumentHead from '../../components/DocumentHead';
import Navbar from '../../components/Header/Navbar';
import Header from '../../components/HealthClimate/HealthAndClimateHeader';
import Impact from '../../components/HealthClimate/HealthAndClimateImpact';
import Sources from '../../components/HealthClimate/Sources';
import HealthAndDiseaseBurden from '../../components/HealthClimate/HealthAndDiseaseBurden';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';
import Footer from '../../components/Footer';

function HealthAndClimateImpacts({ url }) {
  return (
    <Grid>
      <DocumentHead url={url} />
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

HealthAndClimateImpacts.propTypes = {
  url: PropTypes.string.isRequired
};
export default HealthAndClimateImpacts;

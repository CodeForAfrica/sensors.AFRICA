import React from 'react';

import Grid from '@material-ui/core/Grid';

import Hero from '../components/Landing/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <Grid>
      <Hero />
      <Footer />
    </Grid>
  );
}

export default Home;

import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import TestQuality from './TestQuality';

import '../../assets/css/App.css';
import logowhite from '../../assets/images/logos/logowhite.png';

const mainContainer = {
  paddingLeft: '33%',
  paddingRight: '33%'
};

function Hero() {
  return (
    <Grid container item xs={12} className="Image-section">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={mainContainer}
      >
        <img src={logowhite} alt="partners logo" />
        <Typography
          variant="headline"
          align="center"
          style={{ color: 'white' }}
        >
          We are here to give you actionable information about the quality of
          your air, water and sound.
        </Typography>
      </Grid>
      <TestQuality />
    </Grid>
  );
}

export default Hero;

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ColorPalette from './ColorPalette';
import Banners from './Banners';

function Theme() {
  return (
    <Grid>
      <h1 style={{ textAlign: 'center' }}>SENSORS.AFRICA UI: THEME</h1>
      <Typography variant="body1">
        <h5 style={{ textAlign: 'center' }}>
          Visual representation of theme used in sensors.AFRICA
        </h5>
      </Typography>
      <Grid>
        <Banners />
      </Grid>
      <Grid>
        <h1 style={{ textAlign: 'center' }}>
          Color palette for sensors.AFRICA
        </h1>
      </Grid>
      <h5 style={{ textAlign: 'center' }}>sensors.landing</h5>
      <ColorPalette />
      <h5 style={{ textAlign: 'center' }}>sensors.air</h5>
      <ColorPalette />
      <h5 style={{ textAlign: 'center' }}>sensors.water</h5>
      <ColorPalette />
      <h5 style={{ textAlign: 'center' }}>sensors.sound</h5>
      <ColorPalette />
    </Grid>
  );
}

export default Theme;

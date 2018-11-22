import React from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

function Banners() {
  return (
    <Grid style={{ textAlign: 'center' }}>
      <Grid>first banner</Grid>
      <Grid>second banner</Grid>
    </Grid>
  );
}

export default withStyles(Banners);

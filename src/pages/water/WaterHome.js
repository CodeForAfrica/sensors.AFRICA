import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Seo from '../../components/MetaTags/Seo';
import BlueFavicon from '../../components/Favicons/BlueFavicon';

function WaterHome() {
  return (
    <Grid>
      <Seo url="water" />
      <BlueFavicon />
      <Typography variant="h3">WIP: Water homepage</Typography>
    </Grid>
  );
}

export default WaterHome;

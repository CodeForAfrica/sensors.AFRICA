import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import Seo from '../../components/MetaTags/Seo';
import PurpleFavicon from '../../components/Favicons/PurpleFavicon';

function SoundHome() {
  return (
    <Grid>
      <Seo url="sound" />
      <PurpleFavicon />
      <Typography variant="h3">WIP: Sound homepage</Typography>
    </Grid>
  );
}

export default SoundHome;

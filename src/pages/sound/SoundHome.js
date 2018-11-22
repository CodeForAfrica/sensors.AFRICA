import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import PurpleFavicon from '../../components/Favicons/PurpleFavicon';
import DocumentHead from '../../components/DocumentHead';

function SoundHome({ url }) {
  return (
    <Grid>
      <PurpleFavicon />
      <DocumentHead url={url} />
      <Typography variant="h3">WIP: Sound homepage</Typography>
    </Grid>
  );
}

SoundHome.propTypes = {
  url: PropTypes.string.isRequired
};

export default SoundHome;

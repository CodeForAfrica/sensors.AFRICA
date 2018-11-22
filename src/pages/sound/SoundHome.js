import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import DocumentHead from '../../components/DocumentHead';

function SoundHome({ url }) {
  return (
    <Grid>
      <DocumentHead url={url} />
      <Typography variant="h3">WIP: Sound homepage</Typography>
    </Grid>
  );
}

SoundHome.propTypes = {
  url: PropTypes.string.isRequired
};

export default SoundHome;

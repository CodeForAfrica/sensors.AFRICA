import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import BlueFavicon from '../../components/Favicons/BlueFavicon';
import DocumentHead from '../../components/DocumentHead';

function WaterHome({ url }) {
  return (
    <Grid>
      <BlueFavicon />
      <DocumentHead url={url} />
      <Typography variant="h3">WIP: Water homepage</Typography>
    </Grid>
  );
}

WaterHome.propTypes = {
  url: PropTypes.string.isRequired
};
export default WaterHome;

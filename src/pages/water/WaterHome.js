import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import DocumentHead from '../../components/DocumentHead';

function WaterHome({ url }) {
  return (
    <Grid>
      <DocumentHead url={url} />
      <Typography variant="h3">WIP: Water homepage</Typography>
    </Grid>
  );
}

WaterHome.propTypes = {
  url: PropTypes.string.isRequired
};
export default WaterHome;

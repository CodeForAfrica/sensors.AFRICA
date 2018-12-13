import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import StoryList from './StoryList';

import '../../assets/css/App.css';

const styles = () => ({
  root: {
    paddingTop: '4rem',
    backgroundColor: 'white',
    paddingBottom: '4rem'
  },
  headline: {
    textAlign: 'center',
    marginBottom: '2rem'
  }
});

function Showcase({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid item xs={12} className={classes.headline}>
        <Typography variant="h3">SHOWCASE</Typography>
        <Typography variant="body1">
          Here are stories from all around the world on air quality and its
          effects
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <StoryList />
      </Grid>
    </Grid>
  );
}

Showcase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Showcase);

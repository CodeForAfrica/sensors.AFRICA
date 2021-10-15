import React from 'react';

import { Grid, Typography } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import StoryList from 'components/Showcase/StoryList';

const useStyles = makeStyles({
  root: {
    paddingTop: '4rem',
    backgroundColor: 'white',
    paddingBottom: '4rem',
  },
  headline: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  headlineTitle: {
    textAlign: 'center',
    paddingBottom: '1rem',
  },
});

function Showcase() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Grid item xs={12} className={classes.headline}>
        <Typography variant="h3" className={classes.headlineTitle}>
          SHOWCASE
        </Typography>
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

export default Showcase;

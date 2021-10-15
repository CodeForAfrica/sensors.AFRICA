import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HealthEffects from './HealthEffects';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: '2rem',
    paddingTop: '2rem',
    backgroundColor: 'white',
  },
  subheading: {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  issues: {
    textAlign: 'center',
    paddingBottom: '1rem',
  },
  title: {
    textAlign: 'center',
    textTransform: 'none',
  },
  caption: {
    paddingTop: '1rem',
    textAlign: 'center',
  },
  graph: {
    margin: '0 auto',
    width: '9rem',
    [theme.breakpoints.up('md')]: {
      width: '12rem',
      padding: '0 1rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '15rem',
    },
  },
}));

function Issues() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.issues}>
          THE ISSUES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          Air pollution causes 1 in 9 deaths
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          and is the biggest environmental health crisis we face
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.caption}>
        <Typography variant="caption">
          While it’s not always visible, air pollution is the cause of some of
          our most common illnesses.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <HealthEffects />
      </Grid>
    </Grid>
  );
}

export default Issues;

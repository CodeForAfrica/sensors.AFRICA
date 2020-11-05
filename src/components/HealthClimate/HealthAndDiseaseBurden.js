import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HealthEffects from 'components/Air/HealthEffects';
import Burden from 'components/HealthClimate/Burden';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    display: 'block',
  },
  grid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: theme.typography.fontSize,
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
  titleGrid: {
    marginRight: '15%',
    marginLeft: '15%',
  },
  title: {
    textAlign: 'center',
    textTransform: 'None',
  },
}));

function HealthAndBurden() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} className={classes.grid}>
        <Typography
          variant="h6"
          alignItems="center"
          className={classes.mainTitle}
        >
          Health and Disease Burden
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <HealthEffects />
      </Grid>
      <Grid item xs={12}>
        <Burden />
      </Grid>
    </Grid>
  );
}

export default HealthAndBurden;

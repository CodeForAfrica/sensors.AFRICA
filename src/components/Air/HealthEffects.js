import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Gauge from './Gauge';

const useStyles = makeStyles(theme => ({
  svgContainer: {
    paddingTop: '3rem',
    paddingBottom: '2rem',
    width: '100vw',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  }
}));

function HealthEffects() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.svgContainer}
      justify="center"
      alignItems="flex-start"
    >
      <Gauge percentage={36} caption="of lung cancer deaths" />
      <Gauge percentage={34} caption="of stroke deaths" />
      <Gauge percentage={27} caption="of heart disease deaths" />
      <Gauge percentage={35} caption="of COPD (pulmonary disease deaths)" />
    </Grid>
  );
}

export default HealthEffects;

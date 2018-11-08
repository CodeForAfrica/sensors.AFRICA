import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Gauge from '../Air/Gauge';
import Burden from './Burden';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    display: 'block'
  },
  grid: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: theme.typography.fontSize
  },
  caption: {
    paddingTop: '1rem',
    textAlign: 'center'
  },
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
  },
  graph: {
    margin: '0 auto',
    width: '9rem',
    [theme.breakpoints.up('md')]: {
      width: '12rem',
      padding: '0 1rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '15rem'
    }
  },
  titleGrid: {
    marginRight: '15%',
    marginLeft: '15%'
  },
  title: {
    textAlign: 'center',
    textTransform: 'None'
  }
});

function HealthAndBurden({ classes }) {
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
          Health and Burden
        </Typography>
      </Grid>

      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <Burden />
      </Grid>
    </Grid>
  );
}
HealthAndBurden.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthAndBurden);

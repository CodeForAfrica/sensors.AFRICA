import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Gauge from '../AirComponents/GaugeChart';
import HealthBurdenCards from './HealthBurdenCards';

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
    fontWeight: 'bolder',
    textDecoration: 'Upppercase',
    fontSize: theme.typography.fontSmallDefault.fontSize
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

function HealthBurdenComponent({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
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
          justify="center"
          alignItems="flex-start"
          className={classes.svgContainer}
          spacing={24}
        >
          <Grid item>
            <div className={classes.graph}>
              <Gauge percentage={36} />

              <Typography variant="caption" className={classes.caption}>
                of lung cancer deaths
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.graph}>
              <Gauge percentage={34} />

              <Typography variant="caption" className={classes.caption}>
                of stroke deaths
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.graph}>
              <Gauge percentage={27} />

              <Typography variant="caption" className={classes.caption}>
                of heart disease deaths
              </Typography>
            </div>
          </Grid>
          <Grid item>
            <div className={classes.graph}>
              <Gauge percentage={35} />

              <Typography variant="caption" className={classes.caption}>
                of COPD (pulmonary disease deaths)
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <HealthBurdenCards />
    </Grid>
  );
}
HealthBurdenComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthBurdenComponent);

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Gauge from './GaugeChart';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '2rem',
    paddingTop: '2rem',
    backgroundColor: 'white'
  },
  subheading: {
    paddingTop: '1rem',
    paddingBottom: '2rem',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14
  },
  title: {
    textAlign: 'center',
    textTransform: 'none'
  },
  caption: {
    paddingTop: '1rem',
    textAlign: 'center'
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
});

function Issues({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.subheading}>
          THE ISSUES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          Air polution causes 1 in 9 deaths.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          It is the biggest environmental health crisis we face
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" className={classes.caption}>
          We may not always see it, but air pollution is the cause of some of
          our most common illnesses
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
    </Grid>
  );
}

Issues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);

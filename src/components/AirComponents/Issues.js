import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Gauge from './GaugeChart';

const styles = {
  root: {
    flexGrow: 1,
    paddingBottom: '4rem'
  },
  subheading: {
    paddingTop: '1rem',
    paddingBottom: '0.5rem',
    textAlign: 'center'
  },
  title: {
    textAlign: 'center'
  },
  caption: {
    paddingTop: '0',
    textAlign: 'center'
  },
  graph: {
    textAlign: 'center'
  },
  svgContainer: {
    paddingTop: '3rem',
    paddingBottom: '2rem'
  }
};

function Issues({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.subheading}>
          THE ISSUES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.title}>
          Air polution causes 1 in 9 deaths.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.title}>
          It is the biggest environmental health crisis we face
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" className={classes.caption}>
          We may not always see it, but air pollution is the cause of some of
          our most common illnesses
        </Typography>
      </Grid>
      <Grid
        item
        xs={8}
        spacing={24}
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        className={classes.svgContainer}
      >
        <Grid item xs={6} sm={3}>
          <Gauge percentage={36} />

          <Typography variant="caption" className={classes.caption}>
            of lung cancer deaths
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Gauge percentage={34} />

          <Typography variant="caption" className={classes.caption}>
            of stroke deaths
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Gauge percentage={27} />

          <Typography variant="caption" className={classes.caption}>
            of heart disease deaths
          </Typography>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Gauge percentage={35} />

          <Typography variant="caption" className={classes.caption}>
            of COPD (pulmonary disease deaths)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

Issues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);

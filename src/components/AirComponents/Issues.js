import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import graph from '../../assets/images/Graphs.png';

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
    paddingTop: '1rem',
    textAlign: 'center'
  },
  graph: {
    textAlign: 'center'
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
        <Typography variant="subheading" className={classes.subheading}>
          THE ISSUES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="title" className={classes.title}>
          Air polution causes 1 in 9 deaths.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="title" className={classes.title}>
          It is the biggest environmental health crisis we face
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" className={classes.caption}>
          We may not always see it, but air pollution is the cause of some of
          our most common illnesses
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.graph}>
        <img
          src={graph}
          alt="Graphs"
          height="200"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  );
}

Issues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);

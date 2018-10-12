import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  statGrid: {
    textAlign: 'center',
    borderTop: '1px solid  rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid  rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
      border: 'none',
      borderRight: '1px solid  rgba(0, 0, 0, 0.2)'
    }
  },
  stat: {
    textAlign: 'center',
    padding: '4rem',
    [theme.breakpoints.up('md')]: {
      height: 250,
      padding: '0 4rem'
    }
  },
  statHighlight: {
    color: '#2FB56B',
    fontWeight: '500'
  }
});

function PollutionStats({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={4} className={classes.statGrid}>
        <div className={classes.stat}>
          <div>
            <Typography variant="subtitle1">
              Death by air pollution in kenya yearly
            </Typography>
            <Typography variant="h3" className={classes.statHighlight}>
              5,102
            </Typography>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <Typography variant="subtitle1">
              Child Deaths caused by air pollution in kenya yearly
            </Typography>
            <Typography variant="h3" className={classes.statHighlight}>
              2,144
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={4} className={classes.statGrid}>
        <div className={classes.stat}>
          <Typography variant="subtitle1" style={{ paddingBottom: '1rem' }}>
            The top illness caused by air pollution in kenya is
          </Typography>
          <Typography variant="h4" className={classes.statHighlight}>
            ACUTE LOWER RESPIRATORY INFECTION
          </Typography>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        className={classes.statGrid}
        style={{ borderRight: 'none' }}
      >
        <div className={classes.stat}>
          <Typography variant="subtitle1">
            <b>POLLUTION LEVELS IN NAIROBI</b>
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
          >
            The air in Nairobi has an annual average of
          </Typography>
          <Typography
            variant="h4"
            className={classes.statHighlight}
            style={{ paddingBottom: '1rem' }}
          >
            17 ug/m3
          </Typography>
          <Typography variant="subtitle1">
            of PM2.5 particles. That is 70% more than the WHO safe level.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PollutionStats);

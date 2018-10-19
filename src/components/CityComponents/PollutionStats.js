import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '5rem',
    paddingBottom: '5rem'
  },
  mainGrid: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4,
    paddingRight: '8rem',
    paddingLeft: '8rem'
  },
  separator: {
    color: 'rgba(0, 0, 0, 0.2)',
    marginRight: '7rem',
    marginLeft: '7rem'
  },
  statGrid: {
    textAlign: 'center',
    borderTop: '1px solid  rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid  rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
      border: 'none',
      borderRight: '1px solid  rgba(0, 0, 0, 0.2)',
      borderLeft: '1px solid  rgba(0, 0, 0, 0.2)'
    }
  },
  stat: {
    textAlign: 'center'
  },
  centerStat: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      paddingtop: '0.5rem'
    }
  },
  statHighlight: {
    color: theme.palette.primary.light,
    fontWeight: theme.typography.h6.fontWeight
  },
  subtitle1: {
    fontWeight: theme.typography.h6.fontWeight
  }
});

function PollutionStats({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <Grid item xs={12}>
        <hr className={classes.separator} />
      </Grid>

      <Grid
        container
        direction="row"
        className={classes.mainGrid}
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8} className={classes.stat}>
            <Grid style={{ paddingTop: '2rem' }}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Death by air pollution in Kenya yearly
              </Typography>
              <Typography variant="h3" className={classes.statHighlight}>
                5,102
              </Typography>
            </Grid>

            <Grid style={{ marginTop: '2rem', paddingBottom: '2rem' }}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Child Deaths caused by air pollution in kenya yearly
              </Typography>
              <Typography variant="h3" className={classes.statHighlight}>
                2,144
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.statGrid}
        >
          <Grid item xs={8} className={classes.centerStat}>
            <Grid
              style={{
                paddingTop: 0,
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                paddingBottom: '2rem'
              }}
            >
              <Typography variant="subtitle1" className={classes.subtitle1}>
                The top illness caused by air pollution in kenya is
              </Typography>
            </Grid>
            <Grid style={{ paddingBottom: '2rem' }}>
              <Typography variant="h4" className={classes.statHighlight}>
                ACUTE LOWER RESPIRATORY INFECTION
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={8} className={classes.stat}>
            <Typography variant="caption">
              <b>POLLUTION LEVELS IN NAIROBI</b>
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.subtitle1}
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
            <Typography variant="subtitle1" className={classes.subtitle1}>
              of PM2.5 particles. That is 70% more than the WHO safe level.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PollutionStats);

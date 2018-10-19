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
    textAlign: 'center',
    paddingTop: '1rem'
  },
  centerStat: {
    textAlign: 'center',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      paddingtop: '0.5rem'
    }
  },
  centerStatInnerGrid: {
    paddingTop: 0,
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingBottom: '2rem'
  },
  statHighlight: {
    color: theme.palette.primary.light,
    fontWeight: theme.typography.h6.fontWeight,
    paddingBottom: '1rem'
  },
  subtitle1: {
    fontWeight: theme.typography.h6.fontWeight
  },
  title: {
    color: theme.typography.h6.color,
    paddingTop: '3rem'
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
          <Grid item xs={10} className={classes.stat}>
            <Grid style={{ paddingTop: '4rem' }}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Death by air pollution in Kenya yearly
              </Typography>
              <Typography variant="h3" className={classes.statHighlight}>
                5,102
              </Typography>
            </Grid>

            <Grid style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
              <Typography
                variant="subtitle1"
                style={{
                  fontWight: 500,
                  paddingRight: '2.5rem',
                  paddingLeft: '2.5rem'
                }}
              >
                Child Deaths
                <b /> caused by air pollution in Kenya yearly
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
          <Grid item xs={10} className={classes.centerStat}>
            <Grid
              style={{
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
          <Grid item xs={10} className={classes.stat}>
            <Typography variant="heading" className={classes.title}>
              <b>POLLUTION LEVELS IN NAIROBI</b>
            </Typography>
            <Grid>
              <Typography
                variant="subtitle1"
                style={{ paddingTop: '1rem', fontWeight: 500 }}
              >
                The air in Nairobi has an annual average of
              </Typography>
            </Grid>
            <Grid style={{ margin: '1rem' }}>
              <Typography variant="h4" className={classes.statHighlight}>
                17 <sup style={{ fontSize: '16px' }}>ug/m3</sup>
              </Typography>
            </Grid>
            <Grid style={{ paddingRight: '2.5rem', paddingLeft: '2.5rem' }}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                of PM2.5 particles. That is 70% more than the WHO safe level.
              </Typography>
            </Grid>
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

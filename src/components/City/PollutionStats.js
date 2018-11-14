import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },

  statContainer: {
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem'
    }
  },
  statContentContainer: {
    width: '100vw',
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  statMiddleContentContainer: {
    width: '100vw',
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    borderTop: '1px solid  rgba(0, 0, 0, 0.2)',
    borderBottom: '1px solid  rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '19.875rem',
      border: '1px solid  rgba(0, 0, 0, 0.2)',
      borderTop: 'none',
      borderBottom: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  subtitle: {
    fontWeight: theme.typography.h6.fontWeight
  },
  subtitleContinue: {
    fontWeight: theme.typography.h6.fontWeight,
    lineHeight: 1
  },
  subtitleLast: {
    fontWeight: theme.typography.h6.fontWeight,
    paddingBottom: '0.75rem'
  },
  statHighlight: {
    color: theme.palette.primary.light,
    paddingBottom: '1rem'
  },
  nameHighlight: {
    color: theme.palette.primary.light,
    paddingTop: '1.5rem'
  },
  nameHighlightContinue: {
    color: theme.palette.primary.light
  },
  nameHighlightLast: {
    color: theme.palette.primary.light,
    paddingBottom: '3rem'
  },
  statTitle: {
    fontWeight: 700,
    textTransform: 'uppercase'
  },
  sup: {
    fontSize: theme.typography.fontSize,
    textTransform: 'none'
  }
});

function PollutionStats({ classes, pollutionStats, city }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        className={classes.statContainer}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item className={classes.statContentContainer}>
          <Typography variant="subtitle1" className={classes.subtitle}>
            Death by air pollution
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            in {city.country} yearly
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            {pollutionStats.no_death}
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle}>
            Child Deaths
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleContinue}>
            caused by air pollution
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            in {city.country} yearly
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            {pollutionStats.child_death}
          </Typography>
        </Grid>
        <Grid item className={classes.statMiddleContentContainer}>
          <Typography variant="subtitle1" className={classes.subtitle}>
            The top illness caused
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleContinue}>
            by air pollution
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            in {city.country} is
          </Typography>
          <Typography variant="h4" className={classes.nameHighlight}>
            {pollutionStats.top_illness}
          </Typography>
          <Typography variant="h4" className={classes.nameHighlightContinue}>
            RESPIRATORY
          </Typography>
          <Typography variant="h4" className={classes.nameHighlightLast}>
            INFECTION
          </Typography>
        </Grid>
        <Grid item className={classes.statContentContainer}>
          <Typography variant="subtitle2" className={classes.statTitle}>
            POLLUTION LEVELS IN {city.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            The air in {city.name} has an
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            annual average of
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            {pollutionStats.annual_avg}{' '}
            <sup className={classes.sup}>
              µg/m
              <sup>3</sup>
            </sup>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            of PM
            <sub>2.5</sub> particles.
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleContinue}>
            That&apos;s {pollutionStats.percent} than the
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            WHO safe level.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired,
  pollutionStats: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired
};
export default withStyles(styles)(PollutionStats);

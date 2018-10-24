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
    fontSize: theme.typography.fontSize
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
            in Kenya yearly
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            5,102
          </Typography>

          <Typography variant="subtitle1" className={classes.subtitle}>
            Child Deaths
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleContinue}>
            caused by air pollution
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            in Kenya yearly
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            2,144
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
            in Kenya is
          </Typography>
          <Typography variant="h4" className={classes.nameHighlight}>
            ACUTE LOWER
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
            POLLUTION LEVELS IN NAIROBI
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            The air in Nairobi has an
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            annual average of
          </Typography>
          <Typography variant="h3" className={classes.statHighlight}>
            17 <sup className={classes.sup}>ug/m3</sup>
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            of PM2.5 particles.
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleContinue}>
            That&apos;s 70% more than the
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitleLast}>
            WHO safe level.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  /* <Grid
        item
        xs={12}
        container
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
            <Grid className={classes.deathTitle}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Death by air pollution in Kenya yearly
              </Typography>
              <Typography variant="h3" className={classes.statHighlight}>
                5,102
              </Typography>
            </Grid>

            <Grid className={classes.childDeathTitle}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                Child Deaths
                <p className={classes.p}>
                  caused by air pollution in Kenya yearly
                </p>
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
            <Grid className={classes.topIllnessTitle}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                The top illness caused by air pollution in kenya is
              </Typography>
            </Grid>
            <Grid className={classes.secondColumnHeading}>
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
                className={classes.thirdColumnFirstSubtitle}
              >
                The air in Nairobi has an annual average of
              </Typography>
            </Grid>
            <Grid style={{ margin: '1rem' }}>
              <Typography variant="h3" className={classes.statHighlight}>
                17 <sup className={classes.sup}>ug/m3</sup>
              </Typography>
            </Grid>
            <Grid className={classes.thirdColumnLastSubtitle}>
              <Typography variant="subtitle1" className={classes.subtitle1}>
                of PM2.5 particles.{' '}
                <p className={classes.p}>
                  That is 70% more than the WHO safe level.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
       */
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PollutionStats);

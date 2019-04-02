import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HealthEffects from './HealthEffects';
import GlossaryToolTipTitle from '../Tooltip/GlossaryToolTipsTitle';

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
  issues: {
    textAlign: 'center',
    paddingBottom: '1rem'
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
  htmlTooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: '100',
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium
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
        <Typography variant="h3" className={classes.issues}>
          THE ISSUES
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          <Tooltip
            classes={{
              tooltip: classes.htmlTooltip
            }}
            title={
              <GlossaryToolTipTitle
                title="Air pollution"
                description="The release of pollutants into the air that are detrimental to human
                health and the planet as a whole and can reach harmful concentrations
                both outside and indoors."
              />
            }
            placement="top"
          >
            <span>Air Pollution</span>
          </Tooltip>
          &nbsp;causes 1 in 9 deaths
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.title}>
          and is the biggest environmental health crisis we face
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" className={classes.caption}>
          While it’s not always visible, air pollution is the cause of some of
          our most common illnesses.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <HealthEffects />
      </Grid>
    </Grid>
  );
}

Issues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Issues);

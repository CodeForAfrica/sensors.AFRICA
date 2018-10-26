import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ArrowCards from './ArrowCards';
import HostCard from './HostCard';
import HostSensorButtons from './HostSensorButtons';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  description: {
    marginTop: theme.spacing.unit * 4
  },
  arrowDescription: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 4
    }
  },
  hostDescription: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 8
    }
  },
  mainGrid: {
    paddingRight: '4rem',
    paddingLeft: '4rem'
  }
});

function HostSensor({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12}>
        <HostSensorButtons />
      </Grid>

      <Grid item xs={12} className={classes.mainGrid}>
        <Grid
          container
          className={classes.description}
          justify="center"
          alignItems="center"
          spacing={40}
        >
          <Grid item xs={12} md={6} className={classes.arrowDescription}>
            <ArrowCards />
          </Grid>
          <Grid item xs={12} md={6} className={classes.hostDescription}>
            <HostCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

HostSensor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HostSensor);

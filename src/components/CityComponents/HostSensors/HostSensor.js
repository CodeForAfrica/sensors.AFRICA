import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import ArrowCards from './ArrowCards';
import HostCard from './HostCard';
import HostSensorButtons from './HostSensorButtons';

const styles = theme => ({
  root: {
    height: '900px',
    width: 'auto',
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function HostSensor({ classes }) {
  return (
    <Grid container item xs={12} direction="row" className={classes.root}>
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <HostSensorButtons />

        <Grid
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginRight: '8rem', marginLeft: '8rem' }}
        >
          <ArrowCards />
          <HostCard />
        </Grid>
      </Grid>
    </Grid>
  );
}

HostSensor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HostSensor);

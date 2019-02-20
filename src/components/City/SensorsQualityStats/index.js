import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DataTable from './DataTable';
import StatsSummary from './StatsSummary';
import LineGraph from '../LineGraph';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 0,
    marginBottom: theme.spacing.unit * 4
  },
  statsSummary: {
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  dataTable: {
    [theme.breakpoints.up('md')]: {
      width: '39.75rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '53rem'
    }
  },

  // TODO(kilemensi): Currently statsSummary is not implemented yet so make
  // dataTable the only component
  qualityStats: {
    [theme.breakpoints.up('md')]: {
      width: '59.625rem',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(0,0,0,0.1)'
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem'
    }
  }
});

function SensorsQualityStats({
  classes,
  cityHumidityStats,
  cityTemperatureStats,
  cityP2Stats
}) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <StatsSummary />
      <Grid item lg={8} xl={8}>
        <div className={classes.qualityStats}>
          <DataTable
            cityTemperatureStats={cityTemperatureStats}
            cityP2Stats={cityP2Stats}
            cityHumidityStats={cityHumidityStats}
          />
        </div>
      </Grid>
      <LineGraph />
    </Grid>
  );
}

SensorsQualityStats.propTypes = {
  classes: PropTypes.object.isRequired,
  cityHumidityStats: PropTypes.object.isRequired,
  cityTemperatureStats: PropTypes.object.isRequired,
  cityP2Stats: PropTypes.object.isRequired
};
export default withStyles(styles)(SensorsQualityStats);

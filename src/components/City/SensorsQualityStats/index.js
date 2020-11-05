import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import DataTable from 'components/City/SensorsQualityStats/DataTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(4),
  },
  statsSummary: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },

  // TODO(kilemensi): Currently statsSummary is not implemented yet so make
  // dataTable the only component
  qualityStats: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem',
      borderTop: '1px solid rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(0,0,0,0.1)',
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem',
    },
  },
}));

function SensorsQualityStats({
  cityHumidityStats,
  cityTemperatureStats,
  cityP2Stats,
}) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.qualityStats}>
          <DataTable
            cityTemperatureStats={cityTemperatureStats}
            cityP2Stats={cityP2Stats}
            cityHumidityStats={cityHumidityStats}
          />
        </div>
      </Grid>
    </Grid>
  );
}

SensorsQualityStats.propTypes = {
  cityHumidityStats: PropTypes.shape({}).isRequired,
  cityTemperatureStats: PropTypes.shape({}).isRequired,
  cityP2Stats: PropTypes.shape({}).isRequired,
};
export default SensorsQualityStats;

import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      borderRight: '1px solid rgba(0,0,0,0.1)',
      borderLeft: '1px solid rgba(0,0,0,0.1)'
    }
  },
  table: {},
  rowHeight: {
    height: 80
  },
  tableCell: {
    height: 80,
    borderBottom: '0px transparent'
  },
  lastRow: {
    textAlign: 'center'
  },
  typography: {
    [theme.breakpoints.only('xs')]: {
      width: 80
    },
    textAlign: 'center',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem'
  },
  subheading: {
    color: '#424143',
    fontWeight: 'bold',
    fontSize: theme.typography.fontSize
  },
  display2: {
    color: theme.palette.primary.dark
  },
  small: {
    fontSize: '1rem',
    color: theme.palette.primary.light,
    marginTop: '1rem',
    fontWeight: 'bold'
  },
  data: {
    marginBottom: '0.6rem'
  }
});

function renderMaximum(readingsObject) {
  if (readingsObject) {
    const readings = Object.values(readingsObject);
    if (readings[0]) {
      const cityMaximum = readings.reduce(
        (min, p) => (p.average > min ? p.average : min),
        readings[0].average
      );
      return cityMaximum.toFixed(1);
    }
  }
  return 0;
}

function renderMinimum(readingsObject) {
  if (readingsObject) {
    const readings = Object.values(readingsObject);
    if (readings[0]) {
      const cityMinimum = readings.reduce(
        (min, p) => (p.average < min ? p.average : min),
        readings[0].average
      );
      return cityMinimum.toFixed(1);
    }
  }
  return 0;
}

function renderAverage(readingsObject) {
  if (readingsObject) {
    const readings = Object.values(readingsObject);
    if (readings[0]) {
      const cityAverage =
        readings.reduce((a, b) => a + b.average, 0) / readings.length;
      return cityAverage.toFixed(1);
    }
  }
  return 0;
}

function DataTable({
  classes,
  cityHumidityStats,
  cityP2Stats,
  cityTemperatureStats
}) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.rowHeight}>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography variant="h6" className={classes.subheading}>
                      AIR
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    className={classes.data}
                  >
                    <Typography variant="h3" className={classes.display2}>
                      {renderMaximum(cityP2Stats)}
                    </Typography>
                    <small className={classes.small}>
                      PM
                      <sub>2.5</sub>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderMaximum(cityHumidityStats)}
                    </Typography>
                    <small className={classes.small}>
                      g/m
                      <sup>3</sup>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderMaximum(cityTemperatureStats)}
                    </Typography>
                    <small className={classes.small}>
                      <sup>o</sup>C
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow className={classes.rowHeight}>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      AIR
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderAverage(cityP2Stats)}
                    </Typography>
                    <small className={classes.small}>
                      PM
                      <sub>2.5</sub>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderAverage(cityHumidityStats)}
                    </Typography>
                    <small className={classes.small}>
                      g/m
                      <sup>3</sup>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderAverage(cityTemperatureStats)}
                    </Typography>
                    <small className={classes.small}>
                      <sup>o</sup>C
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>

            {/* Last row of the table */}

            <TableRow className={classes.rowHeight}>
              <TableCell className={classes.tableCell}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      AIR
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderMinimum(cityP2Stats)}
                    </Typography>
                    <small className={classes.small}>
                      PM
                      <sub>2.5</sub>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderMinimum(cityHumidityStats)}
                    </Typography>
                    <small className={classes.small}>
                      g/m
                      <sup>3</sup>
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell className={classes.tableCell}>
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}
                >
                  <Grid item>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid item container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {renderMinimum(cityTemperatureStats)}
                    </Typography>
                    <small className={classes.small}>
                      <sup>o</sup>C
                    </small>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
  cityHumidityStats: PropTypes.object.isRequired,
  cityTemperatureStats: PropTypes.object.isRequired,
  cityP2Stats: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);

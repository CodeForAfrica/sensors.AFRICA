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

function DataValue({ children, classes, value }) {
  const valueComponent = (
    <Typography variant="h3" className={classes.display2}>
      {value}
    </Typography>
  );
  if (value === '--') {
    return <React.Fragment>{valueComponent}</React.Fragment>;
  }
  return (
    <React.Fragment>
      {valueComponent}
      {children}
    </React.Fragment>
  );
}
DataValue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.string
};
DataValue.defaultProps = {
  value: '--'
};

function PMValue({ classes, value }) {
  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>
        PM
        <sub>2.5</sub>
      </small>
    </DataValue>
  );
}
PMValue.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
};

function HumidityValue({ classes, value }) {
  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>
        g/m
        <sup>3</sup>
      </small>
    </DataValue>
  );
}
HumidityValue.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
};

function TemperatureValue({ classes, value }) {
  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>
        <sup>o</sup>C
      </small>
    </DataValue>
  );
}
TemperatureValue.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired
};

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
                    <PMValue value={cityP2Stats.maximum} classes={classes} />
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
                    <HumidityValue
                      value={cityHumidityStats.maximum}
                      classes={classes}
                    />
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
                    <TemperatureValue
                      value={cityTemperatureStats.maximum}
                      classes={classes}
                    />
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
                    <PMValue value={cityP2Stats.average} classes={classes} />
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
                    <HumidityValue
                      value={cityHumidityStats.average}
                      classes={classes}
                    />
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
                    <TemperatureValue
                      value={cityTemperatureStats.average}
                      classes={classes}
                    />
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
                    <PMValue value={cityP2Stats.minimum} classes={classes} />
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
                    <HumidityValue
                      value={cityHumidityStats.minimum}
                      classes={classes}
                    />
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
                    <TemperatureValue
                      value={cityTemperatureStats.minimum}
                      classes={classes}
                    />
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

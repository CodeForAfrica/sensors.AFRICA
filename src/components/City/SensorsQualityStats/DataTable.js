import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "59.625rem",
      borderRight: "1px solid rgba(0,0,0,0.1)",
      borderLeft: "1px solid rgba(0,0,0,0.1)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "79.5rem",
    },
  },
  rowHeight: {
    height: 80,
  },
  tableCell: {
    [theme.breakpoints.only("xs")]: {
      padding: 4,
    },
    height: 80,
  },
  lastRowTableCell: {
    [theme.breakpoints.only("xs")]: {
      padding: 4,
    },
    height: 80,
    borderBottom: "0px transparent",
  },
  lastRow: {
    textAlign: "center",
  },
  typography: {
    [theme.breakpoints.only("xs")]: {
      width: 80,
    },
    textAlign: "center",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  subheading: {
    color: "#424143",
    fontWeight: "bold",
    fontSize: theme.typography.fontSize,
  },
  display2: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.h5.fontSize,
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h3.fontSize,
    },
  },
  small: {
    color: theme.palette.primary.light,
    marginTop: "0.5rem",
    marginLeft: "0.375rem",
    fontSize: "0.75rem",
    fontWeight: "bold",
    [theme.breakpoints.up("md")]: {
      marginTop: "1rem",
      marginLeft: "0.5rem",
      fontSize: "1rem",
    },
  },
  data: {
    marginBottom: "0.6rem",
  },
}));

function DataValue({ children, value, ...props }) {
  const classes = useStyles(props);

  const valueComponent = (
    <Typography variant="h3" className={classes.display2}>
      {value}
    </Typography>
  );
  if (value === "--") {
    return valueComponent;
  }
  return (
    <>
      {valueComponent} {children}
    </>
  );
}

DataValue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  value: PropTypes.string,
};

DataValue.defaultProps = {
  value: "--",
};

function PMValue({ value, ...props }) {
  const classes = useStyles(props);

  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>
        µg/m
        <sub>3</sub>
      </small>
    </DataValue>
  );
}

PMValue.propTypes = {
  value: PropTypes.string.isRequired,
};

function HumidityValue({ value, ...props }) {
  const classes = useStyles(props);

  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>% RH</small>
    </DataValue>
  );
}

HumidityValue.propTypes = {
  value: PropTypes.string.isRequired,
};

function TemperatureValue({ value, ...props }) {
  const classes = useStyles(props);
  return (
    <DataValue value={value} classes={classes}>
      <small className={classes.small}>&#8451;</small>
    </DataValue>
  );
}

TemperatureValue.propTypes = {
  value: PropTypes.string.isRequired,
};

function DataTable({
  cityHumidityStats,
  cityP2Stats,
  cityTemperatureStats,
  width,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  const temperature = useMediaQuery(theme.breakpoints.up("sm"))
    ? "TEMPERATURE"
    : "TEMP";

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.rowHeight}>
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="h6" className={classes.subheading}>
                  PM 2.5
                </Typography>
              </Grid>
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                className={classes.data}
              >
                <PMValue value={cityP2Stats.maximum} classes={classes} />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <HumidityValue
                  value={cityHumidityStats.maximum}
                  classes={classes}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  {temperature}
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
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
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  PM 2.5
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <PMValue value={cityP2Stats.average} classes={classes} />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <HumidityValue
                  value={cityHumidityStats.average}
                  classes={classes}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.tableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  {temperature}
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
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
          <TableCell className={classes.lastRowTableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  PM 2.5
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <PMValue value={cityP2Stats.minimum} classes={classes} />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.lastRowTableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
                <HumidityValue
                  value={cityHumidityStats.minimum}
                  classes={classes}
                />
              </Grid>
            </Grid>
          </TableCell>
          <TableCell className={classes.lastRowTableCell}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              className={classes.typography}
            >
              <Grid item>
                <Typography variant="subtitle1" className={classes.subheading}>
                  {temperature}
                </Typography>
              </Grid>
              <Grid item container direction="row" justifyContent="center">
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
  );
}

DataTable.propTypes = {
  cityHumidityStats: PropTypes.shape({
    average: PropTypes.string,
    maximum: PropTypes.string,
    minimum: PropTypes.string,
  }).isRequired,
  cityTemperatureStats: PropTypes.shape({
    average: PropTypes.string,
    maximum: PropTypes.string,
    minimum: PropTypes.string,
  }).isRequired,
  cityP2Stats: PropTypes.shape({
    average: PropTypes.string,
    maximum: PropTypes.string,
    minimum: PropTypes.string,
  }).isRequired,
  width: PropTypes.string.isRequired,
};

export default DataTable;

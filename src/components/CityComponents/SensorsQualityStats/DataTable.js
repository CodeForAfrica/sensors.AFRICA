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
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up('md')]: {
      borderRight: '1px solid rgba(0,0,0,0.1)',
      borderLeft: '1px solid rgba(0,0,0,0.1)'
    }
  },
  table: {
    minWidth: 500
  },
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

function DataTable({ classes }) {
  return (
    <Grid container className={classes.root}>
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
                  <Grid>
                    <Typography variant="h6" className={classes.subheading}>
                      AIR
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    className={classes.data}
                  >
                    <Typography variant="h3" className={classes.display2}>
                      12.5
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      5.0
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      208.6
                    </Typography>
                    <small className={classes.small}>db</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      AIR
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      12.5
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      5.0
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      208.6
                    </Typography>
                    <small className={classes.small}>db</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      AIR
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      12.5
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      HUMIDITY
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      5.0
                    </Typography>
                    <small className={classes.small}>%</small>
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
                  <Grid>
                    <Typography
                      variant="subtitle1"
                      className={classes.subheading}
                    >
                      TEMPERATURE
                    </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      208.6
                    </Typography>
                    <small className={classes.small}>db</small>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);

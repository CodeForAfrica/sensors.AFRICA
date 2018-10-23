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
  lastRow: {
    borderBottom: '0px transparent',
    textAlign: 'center'
  },
  typography: {
    textAlign: 'center',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem'
  },
  subheading: {
    color: '#424143'
  },
  display2: {
    color: '#164B3E'
  },
  small: {
    fontSize: '1rem',
    color: '#2FB56B',
    marginTop: '1rem'
  },
  data: {
    marginBottom: '0.6rem'
  }
});

class DataTable extends React.Component {

  renderTable(classes, p1stats, p2stats, humstats) {
    let a = Object.values(p1stats);
    let b = Object.values(p2stats)
    let c = Object.values(humstats)
    console.log(a,b,c)
     if (a.length > 1 && b.length > 1 && c.length > 1) {
      return (<TableBody>
        { [0,1].map(i => {
            return (
              <TableRow className={classes.rowHeight}>
                    <TableCell>
                    <Grid  container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      className={classes.typography}>
                      <Grid> <Typography variant="subtitle1"
                          className={classes.subheading}>  AIR PM<sub>2.5</sub> </Typography>
                      </Grid>
                      <Grid container direction="row" justify="center">
                        <Typography variant="h3" className={classes.display2}>
                          {a[i].average.toFixed(1)}
                        </Typography>
                        <small className={classes.small}> PM<sub>2.5</sub> </small>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>
                  <Grid  container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.typography}>
                    <Grid> <Typography variant="subtitle1"
                        className={classes.subheading}> HUMIDITY  </Typography>
                    </Grid>
                    <Grid container direction="row" justify="center">
                      <Typography variant="h3" className={classes.display2}>
                        {b[i].average.toFixed(1)}
                      </Typography>
                      <small className={classes.small}>g/m<sup>3</sup></small>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell>
                <Grid  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                  className={classes.typography}>
                  <Grid> <Typography variant="subtitle1"
                      className={classes.subheading}>  AIR PM<sub>1</sub>   </Typography>
                  </Grid>
                  <Grid container direction="row" justify="center">
                    <Typography variant="h3" className={classes.display2}>
                      {c[i].average.toFixed(1)}
                    </Typography>
                    <small className={classes.small}> AIR PM<sub>1</sub> </small>
                  </Grid>
                </Grid>
              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  )
  }
  else {
    return;
  }
  }

  render() {
    const { classes, cityHumidityStats, cityP1Stats, cityP2Stats } = this.props;
    console.log(this.props);
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Table className={classes.table}>
            <TableHead>

            </TableHead>

            <TableBody>

              { this.renderTable(classes, cityP1Stats, cityP2Stats, cityHumidityStats) }

            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);

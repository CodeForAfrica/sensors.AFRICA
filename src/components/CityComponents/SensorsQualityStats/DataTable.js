import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "80%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    borderRight: "1px solid rgba(0,0,0,0.1)",
    borderLeft: "1px solid rgba(0,0,0,0.1)"
  },
  table: {
    minWidth: 500
  },
  rowHeight: {
    height: 80
  },
  lastRow: {
    borderBottom: "0px transparent",
    textAlign: "center"
  },
  typography: {
    textAlign: "center",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem"
  },
  subheading: {
    color: "#424143"
  },
  display2: {
    color: "#164B3E"
  },
  small: {
    fontSize: "1rem",
    color: "#2FB56B",
    marginTop: "1rem"
  },
  data: {
    marginBottom: "0.6rem"
  }
});

function DataTable(props) {
  const { classes } = props;

  return (
    <Grid className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.rowHeight}>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  AIR
                </Typography>
              </Grid>
              <Grid
                container
                direction="row"
                justify="center"
                className={classes.data}
              >
                <Typography variant="display2" className={classes.display2}>
                  12.5
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  5.0
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  SOUND
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  208.6
                </Typography>
                <small className={classes.small}>db</small>
              </Grid>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow className={classes.rowHeight}>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  AIR
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  12.5
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  5.0
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.typography}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  SOUND
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  208.6
                </Typography>
                <small className={classes.small}>db</small>
              </Grid>
            </TableCell>
          </TableRow>

          <TableRow className={classes.rowHeight}>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.lastRow}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  AIR
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  12.5
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.lastRow}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  HUMIDITY
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  5.0
                </Typography>
                <small className={classes.small}>%</small>
              </Grid>
            </TableCell>
            <TableCell
              direction="column"
              justify="center"
              alignItem="center"
              className={classes.lastRow}
            >
              <Grid>
                <Typography variant="subheading" className={classes.subheading}>
                  SOUND
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Typography variant="display2" className={classes.display2}>
                  208.6
                </Typography>
                <small className={classes.small}>db</small>
              </Grid>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataTable);

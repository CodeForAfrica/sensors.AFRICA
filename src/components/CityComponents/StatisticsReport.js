import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    paddingLeft: "3rem",
    paddingRight: "3rem"
  },
  centerGrid: {
    borderRight: "1px solid grey",
    borderLeft: "1px solid grey",
    height: "250px",
    paddingTop: "2rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    textAlign: "center"
  },
  grid: {
    height: "250px",
    textAlign: "center",
    paddingRight: "2rem",
    paddingLeft: "2rem",
    paddingTop: "2rem"
  },
  highlight: {
    color: "#2FB56B",
    fontWeight: "500"
  }
};

class StatisticReport extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <div
            style={{
              paddingBottom: "1.5rem"
            }}
          >
            <Typography variant="subheading">
              Death by air pollution in kenya yearly
            </Typography>
            <Typography variant="display2" className={classes.highlight}>
              5,102
            </Typography>
          </div>
          <div>
            <Typography variant="subheading">
              Child Deaths caused by air pollution in kenya yearly
            </Typography>
            <Typography variant="display2" className={classes.highlight}>
              2,144
            </Typography>
          </div>
        </Grid>

        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.centerGrid}
        >
          <div>
            <Typography variant="subheading" style={{ paddingBottom: "1rem" }}>
              The top illness caused by air pollution in kenya is
            </Typography>
            <Typography variant="display1" className={classes.highlight}>
              ACUTE LOWER RESPIRATORY INFECTION
            </Typography>
          </div>
        </Grid>

        <Grid
          container
          item
          xs={4}
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <div style={{ paddingRight: "2rem", paddingLeft: "2rem" }}>
            <Typography variant="subheading">
              <b>POLLUTION LEVELS IN NAIROBI</b>
            </Typography>
            <Typography
              variant="subheading"
              style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            >
              The air in Nairobi has an annual average of
            </Typography>
            <Typography
              variant="display1"
              className={classes.highlight}
              style={{ paddingBottom: "1rem" }}
            >
              17 ug/m3
            </Typography>
            <Typography variant="subheading">
              of PM2.5 particles. That is 70% more than the WHO safe level.
            </Typography>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StatisticReport);

import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    paddingTop: "2rem",
    paddingBottom: "2rem"
  },
  centerGrid: {
    borderRight: "1px solid grey",
    borderLeft: "1px solid grey",
    height: "200px"
  },
  grid: {
    height: "250px"
  },
  highlight: {
    color: "#2FB56B"
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
          <Typography variant="subheading">
            Death by air pollution in kenya yearly
          </Typography>
          <Typography variant="display2" className={classes.highlight}>
            5,102
          </Typography>
          <Typography variant="subheading">
            Child Deaths caused by air pollution inkenya yearly
          </Typography>
          <Typography variant="display2" className={classes.highlight}>
            2,144
          </Typography>
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
          <div
            style={{
              textALign: "center",
              paddingRight: "1rem",
              paddingLeft: "1rem"
            }}
          >
            <Typography variant="subheading">
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
          <Typography variant="title">POLLUTION LEVELS IN NAIROBI </Typography>
          <Typography variant="subheading">
            The air in Nairobi has an annual average of
          </Typography>
          <Typography variant="display1" className={classes.highlight}>
            17 ug/m3
          </Typography>
          <Typography variant="subheading">
            of PM2.5 particles. That is 70% morre than the WHO safe level.{" "}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(StatisticReport);

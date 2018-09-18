import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent, Button } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    height: "450px"
  },
  sensorsWorkCard: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    height: "200px",
    width: "400px",
    margin: "4rem",
    borderRadius: "0",
    backgroundColor: "#164B3E"
  },
  joinNowCard: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
    height: "200px",
    width: "400px",
    margin: "4rem",
    borderRadius: "0",
    backgroundColor: "#2FB56B"
  },
  cardContent: {
    color: "#fff",
    paddingTop: "3rem"
  },
  typography: {
    textAlign: "center",
    color: "#fff"
  },
  buttonContainer: {
    paddingTop: "2rem",
    textAlign: "center"
  },
  learnMorebutton: {
    padding: "0.8rem",
    backgroundColor: "#164B3E",
    border: "1px solid",
    borderColor: "#f3f3f3",
    borderRadius: 0,
    color: "#fff"
  },
  joinNowbutton: {
    padding: "0.8rem",
    backgroundColor: "#f3f3f3",
    border: "1px solid",
    borderColor: "#f3f3f3",
    borderRadius: 0,
    color: "#164B3E"
  }
};

class CallToAction extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        className={classes.root}
      >
        <Card container item xs={6} className={classes.sensorsWorkCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="display1" className={classes.typography}>
              HOW DO SENSORS WORK?
            </Typography>
            <Grid className={classes.buttonContainer}>
              <Button
                variant="contained"
                ize="large"
                className={classes.learnMorebutton}
              >
                LEARN MORE
              </Button>
            </Grid>
          </CardContent>
        </Card>
        <Card container item xs={6} className={classes.joinNowCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="display1" className={classes.typography}>
              GET YOUR CITY ON BOARD
            </Typography>
            <Grid className={classes.buttonContainer}>
              <Button
                variant="contained"
                size="large"
                className={classes.joinNowbutton}
              >
                JOIN NOW
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(CallToAction);

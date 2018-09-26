import React, { Component } from "react";
import "../../assets/css/App.css";

import {
  Card,
  Grid,
  Typography,
  ListItem,
  List,
  CardContent,
  Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  tweetGrid: {},
  findOutMore: {
    color: "#164B3E"
  },
  card: {
    marginLeft: "3rem",
    height: "100px",
    width: "300px"
  },
  buttonContained: {
    backgroundColor: "#2FB56B",
    color: "#fff",
    borderRadius: 0,
    margin: theme.spacing.unit * 2
  }
});

class ArrowCards extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        item
        xs={6}
        direction="row"
        justify="center"
        className={classes.tweetGrid}
      >
        <Typography
          variant="body2"
          style={{ marginLeft: "4.5rem", color: "green" }}
        >
          WHO CAN I REPORT AIR SENSORS QUALITY TO?
        </Typography>
        <List className="list-ic vertical">
          <ListItem className={classes.list}>
            <span />

            <Card
              className={classes.card}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent
                style={{ textDecoration: "underline", textAlign: "center" }}
              >
                <Typography variant="body2">Local Government</Typography>
                <Typography variant="body2">Environment Ministry</Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className={classes.card}
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent
                style={{ textDecoration: "underline", textAlign: "center" }}
              >
                <Typography variant="body2">
                  @david answered the question about
                </Typography>
                <Typography variant="body2">
                  What reports have been sent
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className={classes.card}
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent
                style={{ textDecoration: "underline", textAlign: "center" }}
              >
                <Typography variant="body2">
                  @david answered the question about
                </Typography>
                <Typography variant="body2">
                  What reports have been sent
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card
              className={classes.card}
              constainer
              direction="row"
              justify="center"
              alignItems="center"
            >
              <CardContent
                style={{ textDecoration: "underline", textAlign: "center" }}
              >
                <Typography variant="body2">
                  @david answered the question about
                </Typography>
                <Typography variant="body2">
                  What reports have been sent
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        </List>

        <Grid container direction="row" justify="center">
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            BROWSE MORE
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(ArrowCards);

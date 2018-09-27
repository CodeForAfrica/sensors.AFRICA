import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    height: "400px"
  },
  offlineCard: {
    height: "220px",
    width: "220px",
    borderRadius: 0,
    borderStyle: 0,
    boxShadow: "none",
    backgroundColor: "#f3f3fe"
  },
  onlineCard: {
    height: "220px",
    width: "220px",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: "#2FB56B"
  },
  cardContent: {
    textAlign: "center",
    color: "#fff"
  },
  caption: {
    paddingTop: theme.spacing.unit * 4
  },
  headline: {
    paddingBottom: theme.spacing.unit * 4
  },
  offlineContent: {
    color: "grey",
    opacity: 0.4
  },
  onlineContent: {
    color: "#fff"
  }
});

class Neighbourhood extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid>
          <Typography variant="headline" className={classes.headline}>
            YOUR NEIGHBOURHOOD
          </Typography>
        </Grid>

        <Grid>
          <Grid container direction="row" justify="center" alignItems="center">
            <Card className={classes.onlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: "#fff" }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.offlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{
                    color: "grey",
                    opacity: "0.4"
                  }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>

            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: "#2FB56B" }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: "#fff" }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>

            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: "#2FB56B" }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: "#fff" }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>

            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.offlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: "grey", opacity: "0.4" }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Neighbourhood);

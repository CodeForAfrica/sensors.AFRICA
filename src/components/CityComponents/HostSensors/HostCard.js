import React, { Component } from "react";

import { Grid, Card, CardContent, Typography, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {},
  card: {
    height: "600px",
    width: "450px",
    backgroundColor: "#2FB56B",
    borderRadius: 0
  },
  cardContent: {
    textAlign: "center",
    paddingTop: "25%"
  },
  display1: {
    color: "#fff",
    paddingTop: "2rem"
  },
  body2: {
    color: "#fff",
    paddingTop: theme.spacing.unit * 4
  },
  caption: {
    color: "#fff",
    paddingTop: "2rem",
    textDecoration: "underline"
  },
  cardButtonOutlined: {
    paddingTop: theme.spacing.unit * 3
  }
});

class HostCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        item
        xs={6}
        direction="row"
        align="center"
        className={classes.root}
      >
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography variant="display1" className={classes.display1}>
              HOST A SENSORS CALL TO ACTION
            </Typography>
            <Typography variant="body2" className={classes.body2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              vel eros vehicula, feugiat nisl a, mollis tortor.
            </Typography>
            <Typography varaiant="caption" className={classes.caption}>
              Local Government
            </Typography>
            <Typography
              variant="caption"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              Environment Ministry
            </Typography>
            <p className={classes.cardButtonOutlined}>
              <a href="">
                <Button
                  variant="contained"
                  size="large"
                  className={classes.findOutMore}
                >
                  FIND OUT MORE
                </Button>
              </a>
            </p>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(HostCard);

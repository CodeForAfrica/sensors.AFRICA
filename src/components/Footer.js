import React, { Component } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/css/App.css";
import codeforafrica from "../assets/images/logos/codeforafricafooter.png";
import innovateafrica from "../assets/images/logos/innovateafrica.png";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Input, FormControl } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: "white",
    backgroundColor: "#424143"
  },
  titles: {
    color: "white"
  },
  fa: {
    padding: "0.5rem",
    transition: "all .5s ease-in-out",
    "&:hover": {
      transform: "scale(1.3)",
      color: "#f3f33"
    }
  },
  connectContainer: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    paddingLeft: theme.spacing.unit * 5,
    paddingRight: theme.spacing.unit * 5
  },
  icons: {
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2
  },
  aboutContainer: {
    textAlign: "center",
    padding: theme.spacing.unit * 3,
    borderLeft: "1px solid white",
    borderRight: "1px solid white"
  },
  footerButton: {
    color: "white",
    backgroundColor: "#2A2A2B",
    borderRadius: "0",
    "&:hover": {
      color: "#424143"
    }
  },
  footerInput: {
    width: "190px",
    backgroundColor: "white",
    border: "1px solid white"
  },
  logoText: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 3
  },
  logoItems: {
    textAlign: "center",
    paddingLeft: theme.spacing.unit * 3
  },
  links: {
    color: "white"
  },
  buttonLink: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#424143"
    }
  }
});

class Footer extends Component {
  state = {
    value: "you@gmail.com"
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} className={classes.root}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="center"
          alignitems="center"
          className={classes.connectContainer}
        >
          <Grid item xs={4} align="center">
            <Typography variant="title" className={classes.titles}>
              CONNECT WITH US
            </Typography>
            <div
              container
              direction="row"
              justify="center"
              alignitems="center"
              className={classes.icons}
            >
              <a
                href="https://www.facebook.com/sensorsAFRICA"
                className={classes.links}
              >
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={["fab", "facebook-f"]}
                  size="lg"
                />
              </a>
              <a
                href="https://twitter.com/sensorsAFRICA"
                className={classes.links}
              >
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={["fab", "twitter"]}
                  size="lg"
                />
              </a>
              <a href="" className={classes.links}>
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={["fab", "instagram"]}
                  size="lg"
                />
              </a>
            </div>
            <Grid
              container
              direction="column"
              justify="space-around"
              alignitems="center"
              className={classes.footerMargin}
            >
              <FormControl>
                <Input
                  type="text"
                  id="you@gmail.com"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className={classes.footerInput}
                />
                <p>
                  <Button variant="contained" className={classes.footerButton}>
                    <a
                      href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
                      className={classes.buttonLink}
                    >
                      SUBSCRIBE TO UPDATES
                    </a>
                  </Button>
                </p>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={4} className={classes.aboutContainer}>
            <Typography variant="title" className={classes.titles}>
              ABOUT SENSORS.AFRICA
            </Typography>
            <p>
              sensors.AFRICA is a pan-African citizen science initiative that
              uses sensors to monitor air, water and sound polution to give
              citizens actionable information about their cities.
            </p>
            <Button variant="contained" className={classes.footerButton}>
              <a
                href="https://medium.com/code-for-africa/tagged/innovateafrica"
                className={classes.buttonLink}
              >
                READ MORE
              </a>
            </Button>
          </Grid>
          <Grid item xs={4}>
            <p className={classes.logoText}>
              This initiative was seed-funded by innovateAFRICA, and is being
              incubated by Code for Africa
            </p>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <a href="https://codeforafrica.org/">
                <img src={codeforafrica} alt="Code For Africa" />
              </a>
              <a href="https://www.innoafrica.org/">
                <img src={innovateafrica} alt="Innovate Africa" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

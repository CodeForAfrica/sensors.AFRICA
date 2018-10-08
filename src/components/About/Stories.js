import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import '../../assets/css/App.css';
import '../../assets/images/background/bgstories.jpg';

const styles = {
  titleSection: {
    textAlign: 'center',
    color: 'white'
  },
  button: {
    paddingTop: '2rem'
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'black'
  }
};

class Stories extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className="Jumbotron" container item xs={12}>
        <Grid
          className={classes.titleSection}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Typography
            variant="display2"
            style={{ color: 'white', textTrandform: 'Uppercase' }}
          >
            SENSORS STORIES
          </Typography>
          <div className={classes.button}>
            <a
              href="https://medium.com/code-for-africa/tagged/innovateafrica"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained">READ ON MEDIUM</Button>
            </a>
          </div>
        </Grid>
      </Grid>
    );
  }
}

Stories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stories);

import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import '../../assets/css/App.css';
import '../../assets/images/background/bgstories.jpg';

const styles = theme => ({
  titleSection: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white'
  },
  buttonContainer: {
    paddingTop: '2rem'
  },
  buttonLink: {
    textDecoration: 'none'
  },
  button: {
    color: theme.palette.primary.dark,
    fontWeight: 900,
    backgroundColor: '#fff'
  }
});

function Stories({ classes }) {
  return (
    <div
      className="Jumbotron"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Grid
        container
        className={classes.titleSection}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{ color: 'white', textTrandform: 'Uppercase' }}
          >
            SENSORS STORIES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <a
              href="https://medium.com/code-for-africa/tagged/innovateafrica"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" className={classes.button}>
                READ ON MEDIUM
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

Stories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Stories);

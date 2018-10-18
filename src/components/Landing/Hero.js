import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import TestQuality from './TestQuality';

import '../../assets/css/App.css';
import bglanding from '../../assets/images/background/bglanding.jpg';
import logowhite from '../../assets/images/logos/logowhite.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundImage: `url(${bglanding})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '100vh'
    }
  },
  intro: {
    color: 'white',
    textTransform: 'none',
    paddingTop: '1rem'
  },
  img: {
    height: '8rem',
    maxWidth: '100%'
  }
});

function Hero({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Link to="/">
          <img src={logowhite} alt="partners logo" className={classes.img} />
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4" align="center" className={classes.intro}>
          We are here to give you actionable information about the quality of
          your city's air, water and sound.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <TestQuality />
      </Grid>
    </Grid>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hero);

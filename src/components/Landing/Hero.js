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
      height: '90vh'
    }
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
          <img src={logowhite} alt="partners logo" />
        </Link>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="headline"
          align="center"
          style={{ color: 'white' }}
        >
          We are here to give you actionable information about the quality of
          your air, water and sound.
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

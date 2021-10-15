import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'components/Link';
import Logo from 'components/Logo';
import TestQuality from 'components/Landing/TestQuality';

import bglanding from 'assets/images/background/bglanding.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundImage: `url(${bglanding})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '100vh',
    },
  },
  intro: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'none',
    paddingTop: '1rem',
    lineHeight: '3.5rem',
  },
  img: {
    height: '8rem',
    maxWidth: '100%',
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Link href="/">
          <Logo badge="landing" classes={{ img: classes.img }} />
        </Link>
      </Grid>

      <Grid item xs={6}>
        <Typography variant="h4" className={classes.intro}>
          We are here to give you actionable information about the quality of
          your city&apos;s air, water, sound and radiation levels.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TestQuality />
      </Grid>
    </Grid>
  );
}

export default Hero;

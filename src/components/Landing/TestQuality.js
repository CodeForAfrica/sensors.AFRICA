import React, { useState, useEffect } from 'react';

import Router from 'next/router';

import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ComingSoon from 'components/ComingSoon';
import ButtonLink from 'components/Link/Button';

import air from 'assets/images/button/airbtn.png';
import water from 'assets/images/button/waterbtn.png';
import sound from 'assets/images/button/soundbtn.png';
import radiation from 'assets/images/button/radiationbtn.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    paddingTop: '2rem',
  },
  img: {
    height: '5.5rem',
    width: 'auto',
    margin: '3rem auto',
    [theme.breakpoints.up('md')]: {
      height: '12.5rem',
      margin: '0 auto',
      padding: '3rem',
    },
  },
  airCard: {
    backgroundColor: theme.palette.primary.light,
    height: '12.5rem',
    width: '10.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      width: '15.625rem',
    },
  },
  waterCard: {
    backgroundColor: '#4972B8',
    height: '12.5rem',
    width: '10.5rem',
    [theme.breakpoints.up('md')]: {
      width: '15.625rem',
    },
  },
  soundCard: {
    backgroundColor: '#B64598',
    height: '12.5rem',
    width: '10.5rem',
    [theme.breakpoints.up('md')]: {
      width: '15.625rem',
    },
  },
  radiationCard: {
    backgroundColor: '#F57C00',
    height: '12.5rem',
    width: '10.5rem',
    [theme.breakpoints.up('md')]: {
      width: '15.625rem',
    },
  },
  testTitle: {
    color: 'white',
    paddingTop: '2rem',
    fontSize: '1rem',
    fontFamily: theme.typography.h6.fontFamily,
    fontWeight: 900,
  },
}));

function TestQuality(props) {
  const classes = useStyles(props);
  const [show, setShow] = useState(false);
  const hideComingSoonAlert = () => {
    Router.push('/');
    setShow(false);
  };

  useEffect(() => {
    const { pathname } = window.location;
    if (
      ['/water', '/sound', '/radiation'].includes(
        pathname && pathname.toLowerCase()
      )
    ) {
      setShow(true);
    }
  }, []);

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          className={classes.testTitle}
        >
          Test the quality of the city&apos;s
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingTop: '1rem', paddingBottom: '3rem' }}
        >
          <ComingSoon show={show} onClose={hideComingSoonAlert} />
          <Grid item>
            <Card className={classes.airCard}>
              <ButtonLink component={CardActionArea} href="/air">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={air}
                  title="Air"
                />
              </ButtonLink>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.waterCard}>
              <ButtonLink component={CardActionArea} href="/water">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={water}
                  title="water"
                />
              </ButtonLink>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.soundCard}>
              <ButtonLink component={CardActionArea} href="/sound">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={sound}
                  title="sound"
                />
              </ButtonLink>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.radiationCard}>
              <ButtonLink component={CardActionArea} href="/radiation">
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={radiation}
                  title="radiation"
                />
              </ButtonLink>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TestQuality;

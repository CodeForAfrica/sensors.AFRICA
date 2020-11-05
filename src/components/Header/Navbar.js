import React, { useState } from 'react';

import { AppBar, Grid, Hidden, MenuItem, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ComingSoon from 'components/ComingSoon';
import IconLogo from 'components/IconLogo';
import Link from 'components/Link';
import MenuBar from 'components/Header/MenuBar';
import SocialMedia from 'components/SocialMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: '100%',
  },
  appBar: {
    backgroundColor: '#2e2e2e',
    boxShadow: 'none',
  },
  toolbar: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%',
    },
  },
  airText: {
    color: '#2FB56B',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33',
    },
    fontFamily: 'Anton',
  },
  waterText: {
    color: '#4972B8',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33',
    },
    fontFamily: 'Anton',
  },
  soundText: {
    color: '#B64598',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33',
    },
    fontFamily: 'Anton',
  },
  radiationText: {
    color: '#F57C00',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33',
    },
    fontFamily: 'Anton',
  },
  // searchFa: {
  //   padding: theme.spacing(1.5),
  //   color: '#454545'
  // },
  airlink: {
    textDecoration: 'none',
    color: '#2FB56B',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  waterlink: {
    textDecoration: 'none',
    color: '#4972B8',
  },
  soundlink: {
    textDecoration: 'none',
    color: '#B64598',
  },
  radiationlink: {
    textDecoration: 'none',
    color: '#F57C00',
  },
  logoGrid: {
    paddingTop: '0.4rem',
  },
  mediaGrid: {
    paddingRight: theme.spacing(1),
  },
}));

function Navbar(props) {
  const classes = useStyles(props);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('/');

  const showComingSoonAlert = (e, pathname) => {
    if (e) {
      e.preventDefault();
    }
    if (pathname) {
      setLocation(window.location.pathname);
      window.history.pushState(null, '', pathname);
    }
    setShow(true);
  };
  const showWaterComingSoonAlert = (e) => showComingSoonAlert(e, '/water');
  const showSoundComingSoonAlert = (e) => showComingSoonAlert(e, '/sound');
  const showRadiationComingSoonAlert = (e) =>
    showComingSoonAlert(e, '/radiation');

  const hideComingSoonAlert = () => {
    window.history.pushState(null, '', location);
    setShow(false);
  };

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {/* Position sticky is not universally supported so the attribute reverts to static when unavailable */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} disableGutters>
            <div item className={classes.logoGrid}>
              <IconLogo />
            </div>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className={classes.linkGrid}
            >
              <MenuItem className={classes.airText}>
                <Link href="/air" className={classes.airlink}>
                  AIR
                </Link>
              </MenuItem>

              <MenuItem className={classes.waterText}>
                <a
                  href="/water"
                  className={classes.waterlink}
                  onClick={showWaterComingSoonAlert}
                >
                  WATER
                </a>
              </MenuItem>
              <MenuItem className={classes.soundText}>
                <a
                  href="/sound"
                  className={classes.soundlink}
                  onClick={showSoundComingSoonAlert}
                >
                  SOUND
                </a>
              </MenuItem>
              <MenuItem className={classes.radiationText}>
                <a
                  href="/radiation"
                  className={classes.radiationlink}
                  onClick={showRadiationComingSoonAlert}
                >
                  RADIATION
                </a>
              </MenuItem>
            </Grid>

            <Hidden smDown>
              <Grid
                container
                xs={4}
                direction="row"
                justify="flex-end"
                alignItems="center"
                className={classes.mediaGrid}
              >
                <Grid item>
                  <SocialMedia color="#2FB56B" />
                </Grid>
              </Grid>
            </Hidden>
            <Grid item>
              <MenuBar />
            </Grid>
          </Toolbar>
          <ComingSoon show={show} onClose={hideComingSoonAlert} />
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Navbar;

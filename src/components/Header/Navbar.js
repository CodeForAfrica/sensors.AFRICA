import React, { useState } from 'react';

import { useRouter } from 'next/router';

import Grid from '@material-ui/core/Grid';
import { AppBar, Hidden, MenuItem, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ComingSoon from 'components/ComingSoon';
import SocialMedia from 'components/SocialMedia';

import IconLogo from 'components/IconLogo';
import MenuBar from 'components/Header/MenuBar';
import Link from 'components/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#2e2e2e',
    boxShadow: 'none'
  },
  toolbar: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%'
    }
  },
  airText: {
    color: '#2FB56B',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    },
    fontFamily: 'Anton'
  },
  waterText: {
    color: '#4972B8',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    },
    fontFamily: 'Anton'
  },
  soundText: {
    color: '#B64598',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    },
    fontFamily: 'Anton'
  },
  radiationText: {
    color: '#F57C00',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    },
    fontFamily: 'Anton'
  },
  // searchFa: {
  //   padding: theme.spacing.unit * 1.5,
  //   color: '#454545'
  // },
  airlink: {
    textDecoration: 'none',
    color: '#2FB56B',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  waterlink: {
    textDecoration: 'none',
    color: '#4972B8'
  },
  soundlink: {
    textDecoration: 'none',
    color: '#B64598'
  },
  radiationlink: {
    textDecoration: 'none',
    color: '#F57C00'
  },
  logoGrid: {
    paddingTop: '0.4rem'
  },
  mediaGrid: {
    paddingRight: theme.spacing.unit
  }
}));

function Navbar({ location }) {
  const classes = useStyles();
  const router = useRouter();

  const [show, setShow] = useState(false);

  const showComingSoonAlert = e => {
    if (e) {
      e.preventDefault();
    }
    if (location) {
      const { pathname } = location;
      router.push(pathname);
    }
    setShow({ show: true });
  };

  const hideComingSoonAlert = () => {
    setShow({ show: false });
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
                  onClick={showComingSoonAlert}
                >
                  WATER
                </a>
              </MenuItem>
              <MenuItem className={classes.soundText}>
                <a
                  href="/sound"
                  className={classes.soundlink}
                  onClick={showComingSoonAlert}
                >
                  SOUND
                </a>
              </MenuItem>
              <MenuItem className={classes.radiationText}>
                <a
                  href="/radiation"
                  className={classes.radiationlink}
                  onClick={showComingSoonAlert}
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

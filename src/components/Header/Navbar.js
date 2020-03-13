import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withRouter } from 'next/router';

import Grid from '@material-ui/core/Grid';
import { AppBar, Hidden, MenuItem, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ComingSoon from 'components/ComingSoon';
import SocialMedia from 'components/SocialMedia';

import IconLogo from 'components/IconLogo';
import MenuBar from 'components/Header/MenuBar';

const styles = theme => ({
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
    color: '#2FB56B'
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
});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.showComingSoonAlert = this.showComingSoonAlert.bind(this);
    this.hideComingSoonAlert = this.hideComingSoonAlert.bind(this);
  }

  showComingSoonAlert(e) {
    if (e) {
      e.preventDefault();
    }

    const { location, history } = this.props;
    if (location) {
      const { pathname } = location;
      history.push(pathname);
    }
    this.setState({ show: true });
  }

  hideComingSoonAlert() {
    this.setState({ show: false });
  }

  render() {
    const { classes } = this.props;
    const { show } = this.state;

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
                <Link href="/">
                  <IconLogo />
                </Link>
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
                    onClick={this.showComingSoonAlert}
                  >
                    WATER
                  </a>
                </MenuItem>
                <MenuItem className={classes.soundText}>
                  <a
                    href="/sound"
                    className={classes.soundlink}
                    onClick={this.showComingSoonAlert}
                  >
                    SOUND
                  </a>
                </MenuItem>
                <MenuItem className={classes.radiationText}>
                  <a
                    href="/radiation"
                    className={classes.radiationlink}
                    onClick={this.showComingSoonAlert}
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
            <ComingSoon show={show} onClose={this.hideComingSoonAlert} />
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

Navbar.propTypes = {
  location: PropTypes.string.isRequired,
  history: PropTypes.string.isRequired
};

export default withRouter(withStyles(styles)(Navbar));

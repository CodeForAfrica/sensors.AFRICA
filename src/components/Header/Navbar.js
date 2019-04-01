import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { AppBar, MenuItem, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import ComingSoon from '../ComingSoon';

import IconLogo from '../IconLogo';
import MenuBar from './MenuBar';

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
  logoGrid: {
    paddingTop: '0.4rem'
  },
  linkGrid: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  mediaGrid: {
    paddingTop: '2rem'
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
          <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar} disableGutters>
              <div item className={classes.logoGrid}>
                <Link to="/">
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
                  <Link to="/air" className={classes.airlink}>
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
              </Grid>

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
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Navbar));

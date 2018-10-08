import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AppBar, Grid, MenuItem, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: '#2e2e2e'
  },
  toolbar: {
    paddingRight: '8%',
    paddingLeft: '8%'
  },
  airText: {
    color: '#2FB56B',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    }
  },
  waterText: {
    color: '#4972B8',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    }
  },
  soundText: {
    color: '#B64598',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#f3f33'
    }
  },
  fa: {
    padding: theme.spacing.unit * 1.5,
    color: '#2FB56B',
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#f3f33'
    }
  },
  searchFa: {
    padding: theme.spacing.unit * 1.5,
    color: '#454545'
  },
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
  }
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12}>
        <AppBar position="static" className={classes.root} item xs={12}>
          <Toolbar className={classes.toolbar}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <MenuItem className={classes.airText}>
                <Link to="/air/home" className={classes.airlink}>
                  AIR
                </Link>
              </MenuItem>

              <MenuItem className={classes.waterText}>
                <Link to="/water/home" className={classes.waterlink}>
                  WATER
                </Link>
              </MenuItem>
              <MenuItem className={classes.soundText}>
                <Link to="/sound/home" className={classes.soundlink}>
                  SOUND
                </Link>
              </MenuItem>
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              {/* <FontAwesomeIcon
                className={classes.searchFa}
                icon="search"
                size="lg"
              />*/}
              <a
                href="https://www.facebook.com/sensorsAFRICA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={['fab', 'facebook-f']}
                  size="lg"
                />
              </a>
              <a
                href="https://twitter.com/sensorsAFRICA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={['fab', 'twitter']}
                  size="lg"
                />
              </a>
              {/* <a href="">
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={["fab", "instagram"]}
                  size="lg"
                />
    </a>*/}
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);

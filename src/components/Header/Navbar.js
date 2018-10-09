import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import SocialMedia from '../SocialMedia';

const styles = theme => ({
  root: {
    flex: 1,
    backgroundColor: '#2e2e2e'
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
  }
});

function Navbar({ classes }) {
  return (
    <Grid container item xs={12}>
      <AppBar position="static" className={classes.root} item xs={12}>
        <Toolbar className={classes.toolbar} disableGutters>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <MenuItem className={classes.airText}>
              <Link to="/air" className={classes.airlink}>
                AIR
              </Link>
            </MenuItem>

            <MenuItem className={classes.waterText}>
              <Link to="/water" className={classes.waterlink}>
                WATER
              </Link>
            </MenuItem>
            <MenuItem className={classes.soundText}>
              <Link to="/sound" className={classes.soundlink}>
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
            {/* <Grid item>
            <FontAwesomeIcon
                className={classes.searchFa}
                icon="search"
                size="lg"
              />
            </Grid> */}
            <Grid item>
              <SocialMedia color="#2FB56B" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import SocialMedia from '../SocialMedia';

const styles = theme => ({
  root: {
    flex: 1,
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
  popup: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '2',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: '0',
    visibility: 'hidden',
    transform: 'scale(1.1)',
    transition: 'visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s',
  },
  popupcontent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    backgroundColor: 'white',
    padding: '1rem 1.5rem',
    width: '24rem',
  },
  closeButton: {
    float: 'right',
    width: '1.5rem',
    lineHeight: '1.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '0.25rem',
    backgroundColor: 'lightgray',

    '&:hover': {
      backgroundColor: 'darkgray'
    }
 },
  showpopup: {
    opacity: '1',
    visibility: 'visible',
    transform: 'scale(1.0)',
    transition: 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s'
  }
});

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {show: false};

    this.showAlert = this.showAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);
  }

  showAlert() {
    this.setState(state => ({
      show: true
    }));
  }

  closeAlert() {
    this.setState(state => ({
      show: false
    }));
  }

  render () {
    const { classes} =  this.props;

    return(
      <Grid container>
        <Grid item xs={12}>
          <AppBar position="static" className={classes.root}>
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
                  <a onClick={this.showAlert} className={classes.waterlink}>
                    WATER
                  </a>
                </MenuItem>
                <MenuItem className={classes.soundText}>
                  <a onClick={this.showAlert} className={classes.soundlink}>
                    SOUND
                  </a>
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
            <Grid id='popupbox' className={classNames(classes.popup, {
            [classes.showpopup]: this.state.show,  })}>
                <div className={classes.popupcontent}>
                    <span onClick={this.closeAlert} className={classes.closeButton}>&times;</span>
                    <h1>Coming Soon</h1>
                </div>
            </Grid>
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);

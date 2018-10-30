import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import ComingSoon from '../ComingSoon';
import SocialMedia from '../SocialMedia';

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
  }
});

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };

    this.toggleShowAlert = this.toggleShowAlert.bind(this);
  }

  toggleShowAlert(e) {
    if (e) {
      e.preventDefault();
    }
    this.setState(prevState => ({ show: !prevState.show }));
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
                  <a
                    href="/water"
                    className={classes.waterlink}
                    onClick={this.toggleShowAlert}
                  >
                    WATER
                  </a>
                </MenuItem>
                <MenuItem className={classes.soundText}>
                  <a
                    href="/sound"
                    className={classes.soundlink}
                    onClick={this.toggleShowAlert}
                  >
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
            <ComingSoon show={show} onClose={this.toggleShowAlert} />
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

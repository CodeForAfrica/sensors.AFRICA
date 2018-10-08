import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CitySearchBar from './CitySearchBar';
import HambugerMenu from '../../Hambuger/HambugerMenu';

import logowhite from '../../../assets/Logo-White.png';

const styles = {
  icon: {
    color: 'white',
    paddingTop: '3%'
  },
  iconContainer: {
    paddingTop: '2rem'
  }
};

class MenuBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} direction="row" justify="space-around">
        <Grid container item xs={8}>
          <Link to="/">
            <img src={logowhite} alt="Sensors Africa Logo" height="100px" />
          </Link>
          <CitySearchBar />
        </Grid>

        <Grid className={classes.iconContainer}>
          <HambugerMenu />
        </Grid>
      </Grid>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);

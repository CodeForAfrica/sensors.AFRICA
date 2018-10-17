import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../../SearchBar';
import HamburgerMenu from '../../Hambuger/HambugerMenu';

import logowhite from '../../../assets/images/logos/logowhite.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%'
    }
  },
  icon: {
    color: 'white',
    paddingTop: '3%'
  },
  iconContainer: {
    paddingTop: '2rem'
  }
});

function CityMenuBar({ classes, handleChange }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item>
        <Grid container alignItems="flex-start">
          <Grid item>
            <Link to="/">
              <img src={logowhite} alt="Sensors Africa Logo" height="100" />
            </Link>
          </Grid>
          <Grid item style={{zIndex: 1}}>
            <SearchBar
              placeholder="Search for another location ..."
              handleChange={handleChange}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <div style={{ paddingTop: '2em' }}>
          <HamburgerMenu />
        </div>
      </Grid>
    </Grid>
  );
}

CityMenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default withStyles(styles)(CityMenuBar);

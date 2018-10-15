import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HamburgerMenu from '../Hambuger/HambugerMenu';

import logowhite from '../../assets/images/logos/logowhite.png';

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

function MenuBar({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="space-between"
      alignItems="flex-start"
    >
      <Grid item>
        <Link to="/">
          <img src={logowhite} alt="sensors.AFRICA" height="100" />
        </Link>
      </Grid>
      <Grid item>
        <Grid className={classes.iconContainer}>
          <HamburgerMenu />
        </Grid>
      </Grid>
    </Grid>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);

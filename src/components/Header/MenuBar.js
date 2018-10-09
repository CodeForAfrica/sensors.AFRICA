import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HamburgerMenu from '../Hambuger/HambugerMenu';

import logowhite from '../../assets/Logo-White.png';

const styles = () => ({
  root: {
    paddingRight: '8%',
    paddingLeft: '8%'
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
        <img src={logowhite} alt="Sensors Africa Logo" height="100px" />
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

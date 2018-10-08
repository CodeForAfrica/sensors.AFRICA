import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HambugerMenu from '../Hambuger/HambugerMenu';

import logowhite from '../../assets/Logo-White.png';

const styles = {
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
};

function MenuBar({ classes }) {
  return (
    <Grid
      container
      item
      xs={12}
      spacing={24}
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      className={classes.root}
    >
      <Link to="/">
        <img src={logowhite} alt="Sensors Africa Logo" height="100px" />
      </Link>
      <Grid className={classes.iconContainer}>
        <HambugerMenu />
      </Grid>
    </Grid>
  );
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(MenuBar);

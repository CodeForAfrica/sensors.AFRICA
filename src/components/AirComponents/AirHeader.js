import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import AirHeaderContent from '../Header/JumbotronContent/AirHeaderContent';
import MenuBar from '../Header/MenuBar';

const styles = {
  jumbotron: {
    backgroundColor: '#2FB56B',
    height: '400px',
    borderRadius: 'none'
  }
};

function AirHeader({ classes }) {
  return (
    <Grid className={classes.jumbotron}>
      <MenuBar />
      <AirHeaderContent title="WE HAVE TESTED THE QUALITY OF YOUR CITY'S AIR" />
    </Grid>
  );
}

AirHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirHeader);

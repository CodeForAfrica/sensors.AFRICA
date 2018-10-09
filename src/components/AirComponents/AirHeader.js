import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import AirHeaderContent from '../Header/JumbotronContent/AirHeaderContent';

const styles = {
  jumbotron: {
    backgroundColor: '#2FB56B',
    height: 400,
    borderRadius: 'none'
  }
};

function AirHeader({ classes }) {
  return (
    <Grid container className={classes.jumbotron}>
      <Grid item xs={12}>
        <MenuBar />
      </Grid>
      <Grid item xs={12}>
        <AirHeaderContent title="WE HAVE TESTED THE QUALITY OF YOUR CITY'S AIR" />
      </Grid>
    </Grid>
  );
}

AirHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirHeader);

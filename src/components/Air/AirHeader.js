import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import AirHeaderContent from '../Header/JumbotronContent/AirHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450
    }
  }
});

function AirHeader({ classes, handleSearch }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <AirHeaderContent handleSearch={handleSearch} />
      </Grid>
    </Grid>
  );
}

AirHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default withStyles(styles)(AirHeader);

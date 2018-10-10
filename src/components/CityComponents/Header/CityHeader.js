import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CityMenuBar from './CityMenuBar';
import AirCityHeaderContent from '../../Header/JumbotronContent/AirCityHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 500
    }
  }
});

function CityHeader({ classes }) {
  return (
    <Grid className={classes.jumbotron} container item={12}>
      <CityMenuBar />
      <AirCityHeaderContent />
    </Grid>
  );
}

CityHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CityHeader);

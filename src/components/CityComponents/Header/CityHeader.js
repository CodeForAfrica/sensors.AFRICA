import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CityMenuBar from './CityMenuBar';
import AirCityHeaderContent from '../../Header/JumbotronContent/AirCityHeaderContent';

const styles = theme => ({
  jumbotron: {
    height: '700px',
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: '500px'
    }
  }
});

function CityHeader({ city, classes, airPol }) {
  return (
    <Grid className={classes.jumbotron} container item={12}>
      <CityMenuBar />
      <AirCityHeaderContent city={city} airPol={airPol} />
    </Grid>
  );
}

CityHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.object.isRequired,
  airPol: PropTypes.number
};

CityHeader.defaultProps = {
  airPol: 0
};

export default withRouter(withStyles(styles)(CityHeader));

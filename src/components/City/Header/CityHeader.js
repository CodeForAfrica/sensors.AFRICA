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
    height: 566,
    [theme.breakpoints.up('md')]: {
      height: 513
    }
  }
});

function CityHeader({ airPol, city, classes, handleSearch }) {
  return (
    <Grid container className={classes.jumbotron}>
      <Grid item xs={12}>
        <CityMenuBar handleSearch={handleSearch} />
        <AirCityHeaderContent city={city} airPol={airPol} />
      </Grid>
    </Grid>
  );
}

CityHeader.propTypes = {
  airPol: PropTypes.number,
  city: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired
};

CityHeader.defaultProps = {
  airPol: 0.0
};

export default withStyles(styles)(CityHeader);

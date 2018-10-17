import React from 'react';
import PropTypes from 'prop-types';

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
      height: '510px'
    }
  }
});

function CityHeader({ airPol, city, classes, handleChange }) {
  return (
    <Grid className={classes.jumbotron} container item xs={12}>
      <CityMenuBar handleChange={handleChange} />
      <AirCityHeaderContent city={city} airPol={airPol} />
    </Grid>
  );
}

CityHeader.propTypes = {
  airPol: PropTypes.number,
  city: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

// CityHeader.defaultProps = {
//   airPol: 0
// };

export default withStyles(styles)(CityHeader);

import React from 'react';
import PropTypes from 'prop-types';

import { Grid, withWidth } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { isWidthDown } from '@material-ui/core/withWidth';

import CityMenuBar from './CityMenuBar';
import AirCityHeaderContent from '../../Header/JumbotronContent/AirCityHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    borderRadius: 'none',
    height: 450,
    [theme.breakpoints.up('md')]: {
      height: 620
    }
  }
});

function CityHeader({
  airPol,
  airPolDescription,
  aqColor,
  city,
  classes,
  handleSearch,
  width
}) {
  let backgroundColor = '#2fb56b';
  if (isWidthDown('sm', width)) {
    backgroundColor = aqColor;
  }
  return (
    <Grid container className={classes.jumbotron} style={{ backgroundColor }}>
      <Grid item xs={12}>
        <CityMenuBar handleSearch={handleSearch} />
        <AirCityHeaderContent
          city={city}
          airPol={airPol}
          airPolDescription={airPolDescription}
        />
      </Grid>
    </Grid>
  );
}

CityHeader.propTypes = {
  airPol: PropTypes.string.isRequired,
  airPolDescription: PropTypes.string.isRequired,
  aqColor: PropTypes.string.isRequired,
  city: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired
};

export default withWidth()(withStyles(styles)(CityHeader));

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import CityMenuBar from './CityMenuBar';

const styles = {
  jumbotron: {
    backgroundColor: '#2FB56B',
    height: '400px',
    borderRadius: 'none'
  }
};

class CityHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.jumbotron} container item={12}>
        <CityMenuBar />
      </Grid>
    );
  }
}

CityHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CityHeader);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../../SearchBar';

const styles = {
  titleSection: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingRight: '25%',
    paddingLeft: '25%'
  },
  menuButton: {
    color: 'white'
  }
};

class AirHeaderContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.titleSection}>
        <Typography variant="display2" style={{ color: 'white' }}>
          {this.props.title}
        </Typography>
        <SearchBar item xs={12} />
      </Grid>
    );
  }
}

AirHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AirHeaderContent);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  titleSection: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingRight: '20%',
    paddingLeft: '20%'
  },
  menuButtton: {
    color: 'white'
  },
  headerText: {
    color: 'white',
    paddingTop: '1rem'
  }
};

class HardwareInfoHeaderContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.titleSection}>
        <Typography variant="display1" className={classes.headerText}>
          {this.props.title}
        </Typography>
        <Typography variant="subheading" className={classes.headerText}>
          {this.props.subheading}
        </Typography>
        <Typography variant="subheading" className={classes.headerText}>
          {this.props.secondsubheading}
        </Typography>
      </Grid>
    );
  }
}

HardwareInfoHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HardwareInfoHeaderContent);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  titleSection: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingRight: '25%',
    paddingLeft: '25%'
  },
  headerText: {
    color: 'white',
    paddingBottom: '1rem'
  }
};

class JoinNetworkContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.titleSection}>
        <Typography variant="display2" className={classes.headerText}>
          {this.props.title}
        </Typography>
        <Typography variant="subheading" className={classes.headerText}>
          {this.props.subheading}
        </Typography>
      </Grid>
    );
  }
}

JoinNetworkContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinNetworkContent);

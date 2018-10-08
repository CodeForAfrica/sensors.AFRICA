import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  jumbotron: {
    backgroundColor: '#454545',
    height: '400px',
    borderRadius: 'none'
  },
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

class JumbotronContent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.titleSection}>
        <Typography variant="display2" style={{ color: 'white' }}>
          {this.props.title}
        </Typography>
        <Typography variant="subheading" style={{ color: 'white' }}>
          {this.props.subheading}
        </Typography>
      </Grid>
    );
  }
}

JumbotronContent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JumbotronContent);

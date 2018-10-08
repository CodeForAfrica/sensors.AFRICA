import React from 'react';
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

function JumbotronContent({ classes, subheading, title }) {
  return (
    <Grid className={classes.titleSection}>
      <Typography variant="display2" style={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="subheading" style={{ color: 'white' }}>
        {subheading}
      </Typography>
    </Grid>
  );
}

JumbotronContent.propTypes = {
  classes: PropTypes.object.isRequired,
  subheading: PropTypes.string,
  title: PropTypes.string
};
JumbotronContent.defaultProps = {
  subheading: 'white',
  title: ''
};
export default withStyles(styles)(JumbotronContent);

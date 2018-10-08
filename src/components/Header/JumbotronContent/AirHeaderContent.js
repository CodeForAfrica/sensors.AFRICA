import React from 'react';
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

function AirHeaderContent({ classes, title }) {
  return (
    <Grid className={classes.titleSection}>
      <Typography variant="display2" style={{ color: 'white' }}>
        {title}
      </Typography>
      <SearchBar item xs={12} />
    </Grid>
  );
}

AirHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};
AirHeaderContent.defaultProps = {
  title: ''
};
export default withStyles(styles)(AirHeaderContent);

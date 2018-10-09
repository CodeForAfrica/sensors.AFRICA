import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../../SearchBar';

const styles = theme => ({
  titleSection: {
    textAlign: 'center',
    paddingTop: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingRight: '25%',
      paddingLeft: '25%'
    }
  },
  menuButton: {
    color: 'white'
  }
});

function AirHeaderContent({ classes, title }) {
  return (
    <Grid className={classes.titleSection}>
      <Grid item xs={12}>
        <Typography variant="display2" style={{ color: 'white' }}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchBar item xs={12} />
      </Grid>
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

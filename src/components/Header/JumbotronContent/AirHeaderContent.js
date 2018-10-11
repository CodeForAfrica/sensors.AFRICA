import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../../SearchBar';

const styles = theme => ({
  titleSection: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingRight: '25%',
      paddingLeft: '25%'
    }
  },
  headerText: {
    color: 'white',
    paddingBottom: '1rem'
  }
});

function AirHeaderContent({ classes, handleChange, title }) {
  return (
    <Grid
      container
      className={classes.titleSection}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="display2" className={classes.headerText}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchBar
          item
          xs={12}
          placeholder="Search for your city ..."
          handleChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}

AirHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string
};
AirHeaderContent.defaultProps = {
  title: ''
};
export default withStyles(styles)(AirHeaderContent);

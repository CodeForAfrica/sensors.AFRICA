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
      paddingRight: '20%',
      paddingLeft: '20%'
    },
    [theme.breakpoints.up('lg')]: {
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
        <Typography variant="h3" className={classes.headerText}>
          WE&apos;VE TESTED THE QUALITY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          OF YOUR CITY&apos;S AIR.
        </Typography>
      </Grid>
      <Grid item>
        <SearchBar
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

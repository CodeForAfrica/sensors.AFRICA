import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
    paddingTop: '1rem'
  }
});

function HardwareInfoHeaderContent({
  classes,
  title,
  subheading,
  secondsubheading
}) {
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
        <Typography variant="subheading" className={classes.headerText}>
          {subheading}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading" className={classes.headerText}>
          {secondsubheading}
        </Typography>
      </Grid>
    </Grid>
  );
}

HardwareInfoHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subheading: PropTypes.string,
  secondsubheading: PropTypes.string
};

HardwareInfoHeaderContent.defaultProps = {
  title: '',
  subheading: '',
  secondsubheading: ''
};
export default withStyles(styles)(HardwareInfoHeaderContent);

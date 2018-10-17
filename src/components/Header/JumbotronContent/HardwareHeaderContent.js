import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  titleSection: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: '2rem'
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
        <Typography variant="h3" className={classes.headerText}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12} container justify="center" alignItems="center">
        <Grid item xs={8}>
          <Typography className={classes.headerText}>{subheading}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <Grid item xs={8}>
          <Typography className={classes.headerText}>
            {secondsubheading}
          </Typography>
        </Grid>
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

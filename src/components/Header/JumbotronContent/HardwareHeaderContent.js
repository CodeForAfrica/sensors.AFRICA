import React from 'react';
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

function HardwareInfoHeaderContent({
  classes,
  title,
  subheading,
  secondsubheading
}) {
  return (
    <Grid className={classes.titleSection}>
      <Typography variant="display1" className={classes.headerText}>
        {title}
      </Typography>
      <Typography variant="subheading" className={classes.headerText}>
        {subheading}
      </Typography>
      <Typography variant="subheading" className={classes.headerText}>
        {secondsubheading}
      </Typography>
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

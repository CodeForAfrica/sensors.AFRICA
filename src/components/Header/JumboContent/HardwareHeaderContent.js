import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  titleSection: {
    flexGrow: 1,
    textAlign: 'center',
    paddingTop: '2rem',
  },
  headerText: {
    color: 'white',
    paddingTop: '1rem',
  },
});

function HardwareInfoHeaderContent({ title, subheading, secondsubheading }) {
  const classes = useStyles();
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
        <Grid item md={8}>
          <Typography className={classes.headerText}>{subheading}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <Grid item md={8}>
          <Typography className={classes.headerText}>
            {secondsubheading}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

HardwareInfoHeaderContent.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  secondsubheading: PropTypes.string,
};

HardwareInfoHeaderContent.defaultProps = {
  title: '',
  subheading: '',
  secondsubheading: '',
};
export default HardwareInfoHeaderContent;

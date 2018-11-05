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
    paddingBottom: '1rem'
  }
});

function HealthClimateContent({ classes, title }) {
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
    </Grid>
  );
}

HealthClimateContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string
};
HealthClimateContent.defaultProps = {
  title: ''
};

export default withStyles(styles)(HealthClimateContent);

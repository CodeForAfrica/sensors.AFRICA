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
    paddingBottom: '1rem'
  }
});

function AboutHeaderContent({ classes, title, subheading }) {
  return (
    <Grid className={classes.titleSection} justify="center" alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.headerText}>
          {subheading}
        </Typography>
      </Grid>
    </Grid>
  );
}

AboutHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  subheading: PropTypes.string
};
AboutHeaderContent.defaultProps = {
  title: '',
  subheading: ''
};
export default withStyles(styles)(AboutHeaderContent);

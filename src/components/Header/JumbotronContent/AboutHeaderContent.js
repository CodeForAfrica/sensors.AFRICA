import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#454545',
    height: 400,
    borderRadius: 'none'
  },
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

function AboutHeaderContent({ classes, subheading, title }) {
  return (
    <Grid className={classes.titleSection}>
      <Typography variant="display2" style={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="subheading" style={{ color: 'white' }}>
        {subheading}
      </Typography>
    </Grid>
  );
}

AboutHeaderContent.propTypes = {
  classes: PropTypes.object.isRequired,
  subheading: PropTypes.string,
  title: PropTypes.string
};
AboutHeaderContent.defaultProps = {
  subheading: 'white',
  title: ''
};
export default withStyles(styles)(AboutHeaderContent);

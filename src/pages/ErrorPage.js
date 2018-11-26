import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/index';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  bodyCopy: {
    margin: '10rem',
    textAlign: 'center'
  },
  link: {
    color: theme.typography.h6.color
  }
});

function ErrorPage({ classes }) {
  return (
    <Grid container item xs={12} className={classes.root}>
      <Navbar />
      <Grid
        container
        item
        xs={12}
        direction="column"
        justify="center"
        alignItem="center"
        className={classes.bodyCopy}
      >
        <Typography variant="h4" syle={{ textAlign: 'center' }}>
          404 Error: Oops! That Page couldn't be found!
        </Typography>
        <Typography variant="subtitle1" className={classes.link}>
          Go back
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}
ErrorPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ErrorPage);

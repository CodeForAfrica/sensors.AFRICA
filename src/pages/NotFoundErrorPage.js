import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/index';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white'
  },
  bodyCopy: {
    margin: '10rem',
    textAlign: 'center'
  },
  link: {
    color: theme.typography.h6.color,
    margin: '1rem'
  }
});

class NotFoundErrorPage extends Component {
  handleBack = () => {
    this.props.history.goBack();
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12} className={classes.root}>
        <Navbar />
        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItem="center"
          className={classes.bodyCopy}
        >
          <Typography variant="h4">
            404 Error: Oops! That Page could not be found!
          </Typography>
          <Typography variant="h5" className={classes.link}>
            <Button variant="outlined" onClick={this.handleBack}>
              {' '}
              Go Back
            </Button>
          </Typography>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

NotFoundErrorPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NotFoundErrorPage));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { NavigateBefore } from '@material-ui/icons';

import DocumentHead from '../components/DocumentHead';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/index';
import backgroundImage from '../assets/images/background/bgsupport.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    backgroundImage: `url(${backgroundImage})`
  },
  bodyCopy: {
    margin: '8rem',
    textAlign: 'center'
  },
  button: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff',
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: '1rem',
    '& .button-icon': {
      display: 'none'
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.secondary.main}`
    },
    '&:hover .button-icon': {
      display: 'inline-block'
    }
  },
  buttonIcon: {
    display: 'none',
    '&:hover': {
      display: 'inline-block'
    }
  },
  typography: {
    color: 'white'
  }
});

class NotFound extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    const { history } = this.props;

    // For security and privacy reasons, browsers don't allow JS to view
    // visited URLs. We'll use document.referrer for approximation
    // @see: https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer
    const previous = document.referrer;
    if (previous) {
      const { location } = window;
      if (!location.origin) {
        location.origin = `${location.protocol}//${location.host}`;
      }
      if (previous.startsWith(location.origin)) {
        return history.goBack();
      }
    }
    return history.push('/');
  }

  render() {
    const { classes, url } = this.props;

    return (
      <Grid container className={classes.root}>
        <DocumentHead url={url} />
        <Navbar />
        <Grid
          item
          xs={12}
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.bodyCopy}
        >
          <Typography variant="h1" className={classes.typography}>
            404
          </Typography>
          <Typography variant="h5" className={classes.typography}>
            OOPS! WE CAN&apos;T SEEM TO FIND THE PAGE YOU ARE LOOKING FOR.
          </Typography>

          <Typography variant="h5">
            <Button
              color="secondary"
              onClick={this.handleBack}
              className={classes.button}
            >
              <NavigateBefore className="button-icon" /> GO BACK
            </Button>
          </Typography>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  url: PropTypes.string
};

NotFound.defaultProps = {
  url: null
};

export default withRouter(withStyles(styles)(NotFound));

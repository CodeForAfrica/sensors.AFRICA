import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../components/DocumentHead';
import Navbar from '../components/Header/Navbar';
import Footer from '../components/Footer/index';
import backgroundImage from '../assets/images/background/bgsupport.jpg';

const styles = () => ({
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
    color: 'white',
    margin: '1rem'
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
    history.goBack();
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
              variant="outlined"
              onClick={this.handleBack}
              className={classes.button}
            >
              GO BACK
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

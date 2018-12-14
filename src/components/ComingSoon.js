import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Email from './Email';

import bglanding from '../assets/images/background/bglanding.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundImage: `url(${bglanding})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  popup: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: '2000',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: '0',
    visibility: 'hidden',
    transform: 'scale(1.1)',
    transition: 'visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s'
  },
  popupcontent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'black',
    padding: '1rem 1.5rem',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem'
    }
  },
  closeButton: {
    color: 'white',
    background: 'none',
    float: 'right',
    fontWeight: 800,
    fontFamily: theme.typography.h6.fontFamily,
    fontSize: theme.typography.h3.fontSize,
    textAlign: 'center',
    cursor: 'pointer'
  },
  showpopup: {
    opacity: '1',
    visibility: 'visible',
    transform: 'scale(1.0)',
    transition: 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s'
  },
  subtitle: {
    marginTop: '1rem',
    marginBottom: '1.5rem',
    color: 'white',
    textAlign: 'justify'
  },
  form: {
    textAlign: 'center'
  },
  button: {
    color: 'white',
    margin: '1rem'
  }
});

class ComingSoon extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { classes, show, onClose } = this.props;

    const containerClassName = classNames(classes.root, classes.popup, {
      [classes.showpopup]: show
    });

    return (
      <Grid
        container
        justify="space-around"
        alignitems="center"
        className={containerClassName}
      >
        <Grid item xs={12} className={classes.popupcontent} container>
          <Grid item xs={12}>
            <Button onClick={onClose} className={classes.closeButton}>
              &times;
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.subtitle}>
              We will be launching soon. Sign up to receive updates as we build
              a transnational and pan-African network of citizen sensors:
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <Email onSubmit={onClose} />
          </Grid>
          <Grid item xs={12} className={classes.form}>
            <Email onSubmit={onClose} />
          </Grid>
          <Button
            variant="outlined"
            onClick={this.handleBack}
            className={classes.button}
          >
            GO BACK
          </Button>
        </Grid>
      </Grid>
    );
  }
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(ComingSoon);

{
  /*function ComingSoon({ classes, show, onClose }) {
  const containerClassName = classNames(classes.root, classes.popup, {
    [classes.showpopup]: show
  });

  return (
    <Grid
      container
      justify="space-around"
      alignitems="center"
      className={containerClassName}
    >
      <Grid item xs={12} className={classes.popupcontent} container>
        <Grid item xs={12}>
          <Button onClick={onClose} className={classes.closeButton}>
            &times;
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" className={classes.subtitle}>
            We will be launching soon. Sign up to receive updates as we build a
            transnational and pan-African network of citizen sensors:
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.form}>
          <Email onSubmit={onClose} />
        </Grid>
        <Grid item xs={12} className={classes.form}>
          <Email onSubmit={onClose} />
        </Grid>
      </Grid>
    </Grid>
  );
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default withStyles(styles)(ComingSoon);*/
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input, FormControl } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

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
    // backgroundColor: 'white',
    padding: '1rem 1.5rem',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '18.125rem',
      marginRight: '4.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '29.75rem',
      marginRight: '1.875rem',
      padding: '3rem'
    }
  },
  closeButton: {
    color: 'white',
    float: 'right',
    width: '1.5rem',
    fontWeight: 800,
    fontSize: theme.typography.h6.fontSize,
    lineHeight: '1.5rem',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '0.25rem'
  },
  showpopup: {
    opacity: '1',
    visibility: 'visible',
    transform: 'scale(1.0)',
    transition: 'visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s'
  },
  footerButton: {
    width: '100%',
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main
    },
    backgroundColor: theme.palette.secondary.dark,
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    height: '3rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  buttonContainer: {
    paddingTop: '1rem'
  },
  footerInput: {
    // Moved to `App.css` due to difficult of setting input `text-align` to `center`
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

const FORM_URL =
  'https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541';

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'you@gmail.com'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    const { onClose } = this.props;

    onClose();
  }

  render() {
    const { classes, show, onClose } = this.props;
    const { value } = this.state;
    const href = `${FORM_URL}&MERGE0=${value}`;
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
        <Grid item xs={12} className={classes.popupcontent}>
          <button
            type="button"
            onClick={onClose}
            className={classes.closeButton}
          >
            &times;
          </button>

          <FormControl>
            <Input
              type="text"
              id="you@gmail.com"
              placeholder={value}
              onChange={this.handleChange}
              className="Email-footerInput"
            />
            <div className={classes.buttonContainer}>
              <a
                href={href}
                className={classes.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="contained"
                  className={classes.footerButton}
                  onClick={this.handleSubmit}
                >
                  SUBSCRIBE TO UPDATES
                </Button>
              </a>
            </div>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

Email.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default withStyles(styles)(Email);

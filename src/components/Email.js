import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input, FormControl } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    background: 'none'
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

class Email extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit() {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit();
    }
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const href = `https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541&EMAIL=${value}`;
    return (
      <Grid
        container
        justify="space-around"
        alignitems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <FormControl>
            <Input
              type="text"
              id="you@gmail.com"
              placeholder="you@gmail.com"
              onChange={this.handleChange}
              className="Email-input"
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
  onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(Email);

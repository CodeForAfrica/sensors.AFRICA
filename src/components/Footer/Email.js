import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input, FormControl } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: '#424143'
  },
  footerButton: {
    color: 'white',
    width: '250px',
    height: '50px',
    fontWeight: 700,
    backgroundColor: '#2A2A2B',
    borderRadius: '0',
    '&:hover': {
      color: '#424143'
    }
  },
  footerInput: {
    width: '250px',
    height: '50px',
    backgroundColor: 'white',
    border: '1px solid white',
    textAlign: 'center',
    '&::placeholder': {
      color: 'red'
    }
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#424143'
    }
  }
});

class Email extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        justify="space-around"
        alignitems="center"
        className={classes.root}
      >
        <Grid item xs={12}>
          <FormControl style={{ margin: '0 auto' }}>
            <Input
              type="text"
              id="you@gmail.com"
              placeholder="you@gmail.com"
              onChange={this.handleChange}
              className={classes.footerInput}
            />
            <p>
              <a
                href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
                className={classes.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.footerButton}>
                  SUBSCRIBE TO UPDATES
                </Button>
              </a>
            </p>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

Email.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Email);

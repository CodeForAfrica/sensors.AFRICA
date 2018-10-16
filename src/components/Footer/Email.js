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
    width: '100%',
    color: 'white',
    backgroundColor: '#2A2A2B',
    '&:hover': {
      color: '#424143'
    },
    height: '3rem'
  },
  footerInput: {
    // Moved to `App.css` due to difficult of setting input `text-align` to `center`
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
  constructor(props) {
    super(props);

    this.state = {
      value: 'you@gmail.com'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const href = `https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541&MERGE0=${value}`;
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
              value={value}
              onChange={this.handleChange}
              className="Email-footerInput"
            />
            <p>
              <a
                href={href}
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

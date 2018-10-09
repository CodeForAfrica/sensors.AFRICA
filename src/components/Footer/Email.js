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
    backgroundColor: '#2A2A2B',
    borderRadius: '0',
    '&:hover': {
      color: '#424143'
    }
  },
  footerInput: {
    width: '190px',
    backgroundColor: 'white',
    border: '1px solid white'
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
              value={value}
              onChange={this.handleChange}
              className={classes.footerInput}
            />
            <p>
              <Button variant="contained" className={classes.footerButton}>
                <a
                  href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
                  className={classes.buttonLink}
                >
                  SUBSCRIBE TO UPDATES
                </a>
              </Button>
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

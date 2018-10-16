import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/App.css';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input } from '@material-ui/core';

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
    fontWeight: 'bolder',
    padding: '1rem',
    fontFamily: '"Montserrat", sans-serif',
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
    fontSize: '15px',
    paddingRight: '2rem',
    paddingLeft: '4rem'
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
    this.state = { emailValue: '' };
  }

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
          <form
            style={{ margin: '0 auto' }}
            action="https://codeforafrica.us6.list-manage.com/subscribe/post"
            method="POST"
            noValidate
          >
            <input type="hidden" name="u" value="65e5825507b3cec760f272e79" />
            <input type="hidden" name="id" value="c2ff751541" />
            <Input
              id="MERGE0"
              type="email"
              name="MERGE0"
              className={classes.footerInput}
              value={this.state.emailValue}
              placeholder="you@gmail.com"
              onChange={e => {
                this.setState({ emailValue: e.target.value });
              }}
              defaultValue="Naked input"
            />
            <Grid item xs={12} style={{ paddingTop: '0.5rem' }}>
              <Button
                variant="contained"
                className={classes.footerButton}
                value="Subscribe"
                type="submit"
                name="submit"
                id="mc-embedded-subscribe-form"
              >
                SUBSCRIBE TO UPDATES
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

Email.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Email);

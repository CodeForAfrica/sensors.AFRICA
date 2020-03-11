import React, { Component } from 'react';

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
          <form
            action="https://codeforafrica.us6.list-manage.com/subscribe/post"
            method="POST"
            noValidate
          >
            <FormControl>
              <input type="hidden" name="u" value="65e5825507b3cec760f272e79" />
              <input type="hidden" name="id" value="c2ff751541" />
              <Input
                id="MERGE0"
                type="email"
                name="MERGE0"
                value={value}
                placeholder="you@gmail.com"
                onChange={this.handleChange}
                className="Email-input"
              />
              <div className={classes.buttonContainer}>
                <Button
                  value="Subscribe"
                  type="submit"
                  name="submit"
                  id="mc-embedded-subscribe-form"
                  variant="contained"
                  className={classes.footerButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SUBSCRIBE TO UPDATES
                </Button>
              </div>
            </FormControl>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Email);

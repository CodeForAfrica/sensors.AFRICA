import React, { useState } from 'react';

import { Button, Grid, Input, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
    background: 'none',
  },
  footerButton: {
    width: '100%',
    color: 'white',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
    backgroundColor: theme.palette.secondary.dark,
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    height: '3rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
  buttonContainer: {
    paddingTop: '1rem',
  },
  footerInput: {
    // Moved to `App.css` due to difficult of setting input `text-align` to `center`
  },
  buttonLink: {
    textDecoration: 'none',
  },
}));

function Email(props) {
  const classes = useStyles(props);
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);

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
              onChange={handleChange}
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

export default Email;

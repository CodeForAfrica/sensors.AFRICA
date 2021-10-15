import React from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import background from 'assets/images/background/bgstories.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: '2rem',
    height: 350,
    backgroundImage: `url('${background}')`,
    backgroundSize: 'cover',
    overflow: 'hidden',
  },
  titleSection: {
    flexGrow: 1,
    textAlign: 'center',
    color: 'white',
  },
  buttonContainer: {
    paddingTop: '2rem',
  },
  buttonLink: {
    textDecoration: 'none',
  },
  button: {
    color: theme.palette.primary.dark,
    fontWeight: 900,
    backgroundColor: '#fff',
  },
}));

function Stories(props) {
  const classes = useStyles(props);

  return (
    <div
      className={classes.root}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <Grid
        container
        className={classes.titleSection}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            style={{ color: 'white', textTrandform: 'Uppercase' }}
          >
            SENSORS STORIES
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <a
              href="https://medium.com/@sensors.AFRICA"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" className={classes.button}>
                READ ON MEDIUM
              </Button>
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Stories;

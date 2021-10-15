import React from 'react';

import classNames from 'classnames';

import Router from 'next/router';

import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import DocumentHead, { URLS } from 'components/DocumentHead';
import Navbar from 'components/Header/Navbar';
import Footer from 'components/Footer/index';

import backgroundImage from 'assets/images/background/bgsupport.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    backgroundImage: `url(${backgroundImage})`,
  },
  bodyCopy: {
    margin: '8rem',
    textAlign: 'center',
  },
  button: {
    color: theme.palette.secondary.main,
    backgroundColor: '#fff',
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: '1rem',
    '& .button-icon': {
      display: 'none',
    },
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: '#fff',
      border: `1px solid ${theme.palette.secondary.main}`,
    },
    '&:hover .button-icon': {
      display: 'inline-block',
    },
  },
  buttonIcon: {
    marginRight: '0.5rem',
  },
  typography: {
    color: 'white',
  },
}));

function NotFound(props) {
  const classes = useStyles(props);
  const handleBack = () => {
    // For security and privacy reasons, browsers don't allow JS to view
    // visited URLs. We'll use document.referrer for approximation
    // @see: https://developer.mozilla.org/en-US/docs/Web/API/Document/referrer
    const previous = document.referrer;
    if (previous) {
      const { location } = window;
      if (!location.origin) {
        location.origin = `${location.protocol}//${location.host}`;
      }
      if (previous.startsWith(location.origin)) {
        return Router.back();
      }
    }
    return Router.push('/');
  };

  return (
    <Grid container className={classes.root}>
      <DocumentHead url={URLS.NOT_FOUND} />
      <Navbar />
      <Grid
        item
        xs={12}
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.bodyCopy}
      >
        <Typography variant="h1" className={classes.typography}>
          404
        </Typography>
        <Typography variant="h5" className={classes.typography}>
          OOPS! WE CAN&apos;T SEEM TO FIND THE PAGE YOU ARE LOOKING FOR.
        </Typography>

        <Typography variant="h5">
          <Button
            color="secondary"
            onClick={handleBack}
            className={classes.button}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              className={classNames(classes.buttonIcon, 'button-icon')}
            />
            GO BACK
          </Button>
        </Typography>
      </Grid>
      <Footer />
    </Grid>
  );
}

export default NotFound;

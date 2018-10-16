import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SocialMedia from '../SocialMedia';
import Email from './Email';

import '../../assets/css/App.css';
import codeforafrica from '../../assets/images/logos/cfafrica_white.png';
import innovateafrica from '../../assets/images/logos/innovateafrica_white.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: '#424143',
    height: '450px',
    [theme.breakpoints.up('md')]: {
      padding: '1rem 0'
    }
  },
  footerContainer: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      paddingBottom: '3rem'
    }
  },
  footerContentContainer: {
    textAlign: 'center',
    padding: '1rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '19rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '22rem'
    }
  },
  footerAboutContainer: {
    textAlign: 'center',
    padding: '1rem',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      paddingBottom: '3rem',
      width: '19rem',
      borderTop: 'none',
      borderLeft: '1px solid white',
      borderBottom: 'none',
      borderRight: '1px solid white'
    },
    [theme.breakpoints.up('lg')]: {
      width: '22rem'
    }
  },
  supportText: {
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing.unit * 6,
      marginRight: theme.spacing.unit * 6,
      textalign: 'center',
      textAlignLast: 'center',
      fontWeight: 400,
      fontSize: '14px'
    }
  },
  aboutcontent: {
    paddingRight: '1.2rem',
    paddingLeft: '1.2rem',
    fontWeight: 400,
    fontSize: '14px',
    textalign: 'justify',
    textAlignLast: 'center'
  },
  titles: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    fontFamily: '"Montserrat", sans-serif',
    fontSize: '16px'
  },
  socialMediaContainer: {
    paddingTop: '0.5rem',
    paddingBottom: '1rem'
  },
  footerButton: {
    color: 'white',
    backgroundColor: '#2A2A2B',
    fontWeight: 'bolder',
    fontFamily: '"Montserrat", sans-serif',
    borderRadius: '0',
    '&:hover': {
      color: '#424143'
    },
    textTransform: 'uppercase',
    height: '3rem'
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      color: '#424143'
    }
  },
  img: {
    maxWidth: '100%',
    height: '100px'
  }
});

function Footer({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        className={classes.footerContainer}
        justify="center"
        alignItems="flex-start"
      >
        <Grid item>
          <div className={classes.footerContentContainer}>
            <Typography variant="h6" className={classes.titles}>
              CONNECT WITH US
            </Typography>
            <div className={classes.socialMediaContainer}>
              <SocialMedia />
            </div>
            <Email />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.footerAboutContainer}>
            <Typography variant="h6" className={classes.titles}>
              ABOUT SENSORS.AFRICA
            </Typography>
            <p className={classes.aboutcontent}>
              sensors.AFRICA is a pan-African citizen science initiative that
              uses sensors to monitor air, water and sound polution to give
              citizens actionable information about their cities.
            </p>
            <a
              href="https://medium.com/code-for-africa/tagged/innovateafrica"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="contained" className={classes.footerButton}>
                READ MORE
              </Button>
            </a>
          </div>
        </Grid>
        <Grid item>
          <div className={classes.footerContentContainer}>
            <Typography variant="h6" className={classes.titles}>
              FUNDED BY
            </Typography>
            <p className={classes.supportText}>
              This initiative was seed-funded by innovateAFRICA, and is being
              incubated by Code for Africa
            </p>
            <Grid container justify="center" alignItems="center">
              <Grid item xs>
                <a
                  href="https://codeforafrica.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={codeforafrica}
                    alt="Code for Africa"
                    className={classes.img}
                  />
                </a>
              </Grid>
              <Grid item xs>
                <a
                  href="https://innovateafrica.fund/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={innovateafrica}
                    alt="innovateAFRICA"
                    className={classes.img}
                  />
                </a>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

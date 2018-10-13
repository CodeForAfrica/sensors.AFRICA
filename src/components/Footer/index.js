import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
    backgroundColor: '#424143'
  },
  titles: {
    color: 'white',
    fontWeight: 700,
    fontSize: '18px'
  },
  footerContainer: {
    [theme.breakpoints.up('md')]: {
      paddingTop: '4rem',
      paddingBottom: '4rem',
      paddingLeft: '8rem',
      paddingRight: '8rem'
    }
  },
  footerConnectContainer: {
    textAlign: 'right',
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingRight: '2rem'
    }
  },
  footerContentContainer: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 5,
    [theme.breakpoints.up('md')]: {
      paddingTop: 0
    }
  },
  supportText: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing.unit * 6,
      paddingRight: theme.spacing.unit * 6
    }
  },
  footerAboutContainer: {
    textAlign: 'center',
    height: '250px',
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 0,
      borderTop: 'none',
      borderLeft: '1px solid white',
      borderBottom: 'none',
      borderRight: '1px solid white'
    }
  },
  aboutcontent: {
    paddingRight: '1rem',
    paddingLeft: '1rem'
  },
  footerButton: {
    color: 'white',
    backgroundColor: '#2A2A2B',
    fontWeight: 700,
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
        <Grid
          item
          xs={12}
          md={4}
          container
          className={classes.footerConnectContainer}
        >
          {' '}
          <Grid item xs={12}>
            {' '}
            <Typography variant="h6" className={classes.titles}>
              {' '}
              CONNECT WITH US
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <SocialMedia />
          </Grid>
          <Grid item xs={12}>
            <Email />
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          className={classes.footerAboutContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.titles}>
              ABOUT SENSORS.AFRICA
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.aboutcontent}>
            <p>
              sensors.AFRICA is a pan-African citizen science initiative that
              uses sensors to monitor air, water and sound polution to give
              citizens actionable information about their cities.
            </p>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          container
          className={classes.footerContentContainer}
        >
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.titles}>
              FUNDED BY
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.supportText}>
            <p>
              This initiative was seed-funded by innovateAFRICA, and is being
              incubated by Code for Africa
            </p>
          </Grid>
          <Grid item xs={12}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <a
                href="https://codeforafrica.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={codeforafrica} alt="Code for Africa" height="100px" />
              </a>
              <a
                href="https://innovateafrica.fund/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={innovateafrica} alt="innovateAFRICA" height="100px" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

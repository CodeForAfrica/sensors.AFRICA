import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography, Tooltip } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SocialMedia from '../SocialMedia';
import Email from '../Email';

import '../../assets/css/App.css';
import codeforafrica from '../../assets/images/logos/cfafrica_white.png';
import innovateafrica from '../../assets/images/logos/innovateafrica_white.png';
import GlossaryToolTipTitle from '../Tooltip/GlossaryToolTipsTitle';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: theme.palette.secondary.main
  },
  footerContainer: {
    [theme.breakpoints.up('md')]: {
      paddingBottom: '5rem'
    }
  },
  footerContentContainer: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  footerAboutContainer: {
    textAlign: 'center',
    paddingTop: '2rem',
    paddingBottom: '1rem',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '19.875rem',
      border: '1px solid white',
      borderTop: 'none',
      borderBottom: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  titles: {
    color: 'white',
    fontWeight: 800,
    textTransform: 'none'
  },
  socialMediaContainer: {
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  aboutContent: {
    color: 'white',
    padding: '1rem',
    textalign: 'justify',
    textAlignLast: 'center'
  },
  footerButton: {
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
      marginTop: '1rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  buttonLink: {
    textDecoration: 'none'
  },
  supportText: {
    color: 'white',
    padding: '1.2rem',
    [theme.breakpoints.up('md')]: {
      marginLeft: '1.5rem',
      marginRight: '1.5rem',
      textAlign: 'center'
    }
  },
  img: {
    maxWidth: '100%',
    height: '100px'
  },
  htmlTooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: '100',
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium
    }
  }
});

function Footer({ classes }) {
  return (
    <Grid
      container
      color="secondary"
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
        <Grid item className={classes.footerContentContainer}>
          <Typography variant="h6" className={classes.titles}>
            CONNECT WITH US
          </Typography>
          <div className={classes.socialMediaContainer}>
            <SocialMedia />
          </div>
          <Email />
        </Grid>
        <Grid item className={classes.footerAboutContainer}>
          <Typography variant="h6" className={classes.titles}>
            ABOUT sensors.AFRICA
          </Typography>
          <Typography variant="caption" className={classes.aboutContent}>
            sensors.AFRICA is a pan-African&nbsp;
            <Tooltip
              classes={{
                tooltip: classes.htmlTooltip
              }}
              title={
                <GlossaryToolTipTitle
                  title="Citizen science initiative"
                  description="Scientific research conducted, in whole or in part, by amateur (or nonprofessional) 
                  scientists, to expand opportunities for scientific data collection and to 
                  provide access to scientific information for community members."
                />
              }
              placement="top"
            >
              <span>citizen science initiative</span>
            </Tooltip>
            &nbsp;that uses sensors to monitor air, water and sound pollution to
            give citizens actionable information about their cities.
          </Typography>
          <Link to="/about" className={classes.buttonLink}>
            <Button variant="contained" className={classes.footerButton}>
              READ MORE
            </Button>
          </Link>
        </Grid>
        <Grid item className={classes.footerContentContainer}>
          <Typography variant="h6" className={classes.titles}>
            FUNDED BY
          </Typography>
          <Typography variant="caption" className={classes.supportText}>
            This initiative was seed-funded by innovateAFRICA and is being
            incubated by Code for Africa.
          </Typography>
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
        </Grid>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);

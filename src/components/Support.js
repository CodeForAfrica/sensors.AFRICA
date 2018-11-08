import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TwitterShareButton } from 'react-share';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem'
    }
  },
  supportCard: {
    height: '15rem',
    width: '100vw',
    paddingTop: '0.75rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '18.75rem',
      marginRight: '1.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginRight: '1.125rem'
    }
  },
  kickstartCard: {
    height: '15rem',
    width: '100vw',
    paddingTop: '0.75rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '18.75rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    }
  },
  cleanWaterCard: {
    height: '15rem',
    width: '100vw',
    paddingTop: '0.75rem',
    [theme.breakpoints.up('md')]: {
      marginTop: '3rem',
      width: '18.75rem',
      marginLeft: '1.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginLeft: '1.125rem'
    }
  },
  cardContent: {
    textAlign: 'center'
  },
  button: {
    color: 'white',
    backgroundColor: '#2FB56B',
    textTransform: 'uppercase',
    margin: '1rem auto',
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
  buttonOutlined: {
    color: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
    margin: '1rem auto',
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
  buttonLink: {
    textDecoration: 'none'
  },
  fa: {
    transition: 'all .5s ease-in-out',
    padding: theme.spacing.unit / 2,
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#f3f33'
    }
  },
});

function Support({ classes, classNames }) {
  const className = classNames ? `${classes.root} ${classNames}` : classes.root;
  const url = 'https://sensors.AFRICA'
  const text = "Did you know #AirQuality wadawada..."
  return (
    <Grid container justify="center" align="center" className={className}>
      <Grid item>
        <Card className={classes.supportCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">SUPPORT</Typography>
            <Typography variant="h5">EXISTING SENSORS</Typography>
            <Typography variant="h5">NETWORKS</Typography>
            <a
              href="https://archive.sensors.africa/"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outlined"
                color="primary"
                className={classes.buttonOutlined}
              >
                VIEW DATABASE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.kickstartCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">KICKSTART YOUR</Typography>
            <Typography variant="h5">CITY&apos;S OWN</Typography>
            <Typography variant="h5">SENSOR PROGRAM</Typography>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              className={classes.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                SIGN UP HERE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.cleanWaterCard}>
          <CardContent className={classes.cardContent}>
            <Typography variant="h5">LET YOUR CITY KNOW</Typography>
            <Typography variant="h5">THAT CLEAN WATER</Typography>
            <Typography variant="h5">MATTERS TO YOU</Typography>
            <TwitterShareButton
              url={url}
              title={text}
              via="sensorsAFRICA"
              hashtags={["sensorsAFRICA"]}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                <FontAwesomeIcon
                  className={classes.fa}
                  icon={['fab', 'twitter']}
                  size="2x"
                  fixedWidth
                  style={{ color: 'white' }}
                /> TWEET
                </Button>
            </TwitterShareButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

Support.propTypes = {
  classes: PropTypes.object.isRequired,
  classNames: PropTypes.string
};
Support.defaultProps = {
  classNames: undefined
};

export default withStyles(styles)(Support);

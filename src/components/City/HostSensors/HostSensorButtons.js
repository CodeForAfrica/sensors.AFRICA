import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TwitterShareButton } from 'react-share';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2rem'
  },
  buttonContained: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
    borderRadius: 0,
    margin: theme.spacing.unit * 2,
    fontWeight: 700,
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid rgba(0, 0, 0, 0.23)'
    }
  },
  buttonOutlined: {
    color: theme.palette.primary.dark,
    borderRadius: 0,
    margin: theme.spacing.unit * 2,
    fontWeight: 700,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid rgba(0, 0, 0, 0.23)'
    }
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

function HostSensorButtons({ city, classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <a
          href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            size="large"
            className={classes.buttonOutlined}
          >
            SUBSCRIBE
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            CONNECT
          </Button>
        </a>
      </Grid>
      <Grid item>
        <TwitterShareButton
          url="https://sensors.AFRICA/air"
          title={`Did you know the #AirQuality in ${
            city.name
          } directly affects my health ${
            city.twitterHandle
          }? Check our city’s pollution levels on `}
          via="sensorsAFRICA"
          hashtags={['sensorsAFRICA']}
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            ACT
          </Button>
        </TwitterShareButton>
      </Grid>
      <Grid item>
        <TwitterShareButton
          url="https://sensors.AFRICA/air"
          title="Did you know the #AirQuality in our city directly affects my health? Check our city’s pollution levels on"
          via="sensorsAFRICA"
          hashtags={['sensorsAFRICA']}
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            SHARE
          </Button>
        </TwitterShareButton>
      </Grid>
    </Grid>
  );
}

HostSensorButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.shape({}).isRequired
};
export default withStyles(styles)(HostSensorButtons);

import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TwitterShareButton } from 'react-share';

import HostSensorButton from './HostSensorButton';
import ShareButton from './ShareButton';

const styles = () => ({
  root: {
    flexGrow: 1,
    paddingTop: '2rem'
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
          <HostSensorButton outlined>SUBSCRIBE</HostSensorButton>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HostSensorButton>CONNECT</HostSensorButton>
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
          <HostSensorButton>ACT</HostSensorButton>
        </TwitterShareButton>
      </Grid>
      <Grid item>
        <ShareButton className={classes.buttonContained} />
      </Grid>
    </Grid>
  );
}

HostSensorButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.shape({}).isRequired
};
export default withStyles(styles)(HostSensorButtons);

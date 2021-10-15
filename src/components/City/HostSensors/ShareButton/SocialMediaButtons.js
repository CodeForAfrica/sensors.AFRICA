import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { TwitterShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
  twitter: { backgroundColor: '#00aced', margin: '0.2rem' },
  facebook: { backgroundColor: '#3b5998', margin: '0.2rem' },
  instagram: { backgroundColor: '#8a3ab9', margin: '0.2rem' },
  medium: { backgroundColor: '#00ab6c', margin: '0.2rem' },
  fa: { color: 'white', margin: '0.2rem' },
});

function SocialMediaButtons({ city }) {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignitems="center">
      <Grid item className={classes.twitter}>
        <TwitterShareButton
          url="https://sensors.AFRICA/air"
          title={`Did you know the #AirQuality in ${city.name} directly affects my health ${city.twitterHandle}? Check our city’s pollution levels on `}
          via="sensorsAFRICA"
          hashtags={['sensorsAFRICA']}
          className={classes.buttonLink}
        >
          <a
            href="https://twitter.com/sensorsAFRICA/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size="2x"
              fixedWidth
              className={classes.fa}
            />
          </a>
        </TwitterShareButton>
      </Grid>
      <Grid item className={classes.facebook}>
        <a
          href="https://www.facebook.com/CodeForAfrica/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'facebook-f']}
            size="2x"
            fixedWidth
            className={classes.fa}
          />
        </a>
      </Grid>
      <Grid item className={classes.instagram}>
        <a
          href="https://www.instagram.com/sensorsAFRICA/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size="2x"
            fixedWidth
            className={classes.fa}
          />
        </a>
      </Grid>
      <Grid item className={classes.medium}>
        <a
          href="https://medium.com/code-for-africa/tagged/innovateafrica"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={['fab', 'medium-m']}
            size="2x"
            fixedWidth
            className={classes.fa}
          />
        </a>
      </Grid>
    </Grid>
  );
}

SocialMediaButtons.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    twitterHandle: PropTypes.string.isRequired,
  }).isRequired,
};
export default SocialMediaButtons;

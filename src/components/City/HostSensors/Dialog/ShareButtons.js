import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  twitter: { backgroundColor: '#00aced', margin: '0.2rem' },
  facebook: { backgroundColor: '#3b5998', margin: '0.2rem' },
  instagram: { backgroundColor: '#8a3ab9', margin: '0.2rem' },
  medium: { backgroundColor: '#00ab6c', margin: '0.2rem' },
  fa: { color: 'white', margin: '0.2rem' }
});

function SocialMedia({ classes }) {
  return (
    <Grid container justify="center" alignitems="center">
      <Grid item className={classes.twitter}>
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
      </Grid>
      <Grid item className={classes.facebook}>
        <a
          href="https://www.facebook.com/sensorsAFRICA/"
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
        <a href="https://www.instagram.com/sensorsAFRICA/">
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size="2x"
            fixedWidth
            className={classes.fa}
          />
        </a>
      </Grid>
      <Grid item className={classes.medium}>
        <a href="https://medium.com/code-for-africa/tagged/innovateafrica">
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

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SocialMedia);

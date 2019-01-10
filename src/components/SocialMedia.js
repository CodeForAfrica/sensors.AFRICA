import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: '#424143',
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2
  },

  fa: {
    transition: 'all .5s ease-in-out',
    padding: theme.spacing.unit / 2,
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#f3f33'
    }
  },

  links: {
    color: 'white'
  }
});

function SocialMedia({ color, classes }) {
  return (
    <Grid
      container
      justify="center"
      alignitems="center"
      className={classes.icons}
    >
      <Grid item>
        <a
          href="https://twitter.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'twitter']}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.facebook.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'facebook-f']}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://www.instagram.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'instagram']}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
        <a
          href="https://medium.com/code-for-africa/tagged/sensorsafrica"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'medium-m']}
            size="2x"
            fixedWidth
            style={{ color }}
          />
        </a>
      </Grid>
    </Grid>
  );
}

SocialMedia.propTypes = {
  color: PropTypes.string,
  classes: PropTypes.object.isRequired
};
SocialMedia.defaultProps = {
  color: '#fff'
};
export default withStyles(styles)(SocialMedia);

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
    padding: theme.spacing.unit,
    transition: 'all .5s ease-in-out',
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#f3f33'
    }
  },

  links: {
    color: 'white'
  },
  icons: {
    marginTop: '1rem',
    marginBottom: '1rem'
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
            size="3x"
            style={{ color }}
          />
        </a>
        <a
          href="https://www.facebook.com/sensorsAFRICA/"
          className={classes.links}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'facebook-f']}
            size="3x"
            style={{ color }}
          />
        </a>

        <a
          href="https://instagram.com/sensorsAFRICA/"
          className={classes.links}
        >
          <FontAwesomeIcon
            className={classes.fa}
            icon={['fab', 'instagram']}
            size="3x"
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

import React from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  fa: {
    transition: 'all .5s ease-in-out',
    padding: theme.spacing(0.5),
    '&:hover': {
      transform: 'scale(1.3)',
      color: '#f3f3f3',
    },
  },
  links: {
    color: 'white',
  },
}));

function SocialMedia({ color }) {
  const classes = useStyles();
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
          href="https://www.facebook.com/CodeForAfrica/"
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
          href="https://medium.com/@sensors.AFRICA"
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
};

SocialMedia.defaultProps = {
  color: '#fff',
};

export default SocialMedia;

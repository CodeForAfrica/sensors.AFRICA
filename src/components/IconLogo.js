import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import iconlogo from 'assets/images/logos/sensorsLogo.png';

const useStyles = makeStyles(theme => ({
  defaultBadge: {
    zIndex: 1301,
    top: '5.8rem',
    right: '1.65rem',
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize
  },
  defaultActiveBadge: {
    zIndex: 1301,
    top: '5.8rem',
    right: '1.65rem',
    fontSize: theme.typography.caption.fontSize
  },
  landingBadge: {
    zIndex: 1301,
    top: '7.175rem',
    right: '1.65rem',
    fontSize: theme.typography.caption.fontSize
  },
  logo: {
    zIndex: 1301,
    position: 'relative'
  },
  img: {}
}));

function IconLogo() {
  const classes = useStyles();
  const imgClassName = classNames(classes.logo, classes.img);
  return (
    <img
      src={iconlogo}
      className={imgClassName}
      alt="sensors.AFRICA"
      height="50"
    />
  );
}

export default IconLogo;

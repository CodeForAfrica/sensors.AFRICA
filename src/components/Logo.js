import React from 'react';

import PropTypes from 'prop-types';

import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

import classNames from 'classnames';

import logowhite from 'assets/images/logos/logowhite.png';

const useStyles = makeStyles((theme) => ({
  defaultBadge: {
    zIndex: 1301,
    top: '5.8rem',
    right: '1.65rem',
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize,
  },
  defaultActiveBadge: {
    zIndex: 1301,
    top: '5.8rem',
    right: '1.65rem',
    fontSize: theme.typography.caption.fontSize,
  },
  landingBadge: {
    zIndex: 1301,
    top: '7.175rem',
    right: '1.65rem',
    fontSize: theme.typography.caption.fontSize,
  },
  logo: {
    zIndex: 1301,
    position: 'relative',
  },
  img: {},
}));

function Logo({ badge, active }) {
  const classes = useStyles();
  const activeStatus = active && badge === 'default' ? 'Active' : '';
  const imgClassName = classNames(classes.logo, classes.img);
  return (
    <Badge
      badgeContent="beta"
      classes={{ badge: classes[`${badge}${activeStatus}Badge`] }}
    >
      <img
        src={logowhite}
        className={imgClassName}
        alt="sensors.AFRICA"
        height="100"
      />
    </Badge>
  );
}

Logo.propTypes = {
  active: PropTypes.bool,
  badge: PropTypes.string,
};

Logo.defaultProps = {
  active: false,
  badge: 'default',
};

export default Logo;

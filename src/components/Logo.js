import React from 'react';
import PropTypes from 'prop-types';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import logowhite from '../assets/images/logos/logowhite.png';

const styles = theme => ({
  defaultBadge: {
    zIndex: 1301,
    top: 82,
    right: 15,
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize
  },
  defaultActiveBadge: {
    zIndex: 1301,
    top: 82,
    right: 15,
    fontSize: theme.typography.caption.fontSize
  },
  landingBadge: {
    zIndex: 1301,
    top: 104,
    right: 15,
    fontSize: theme.typography.caption.fontSize
  },
  logo: {
    zIndex: 1301,
    position: 'relative'
  },
  img: {}
});

function Logo({ badge, active, classes }) {
  const activeStatus = active && badge == 'default' ? 'Active' : '';
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
  classes: PropTypes.object.isRequired,
  badge: PropTypes.string
};

Logo.defaultProps = {
  active: false,
  badge: 'default'
};

export default withStyles(styles)(Logo);

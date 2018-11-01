import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import logowhite from '../assets/images/logos/logowhite.png';

const styles = () => ({
  logo: {
    zIndex: 1301,
    position: 'relative'
  },
  img: {}
});

function Logo({ classes }) {
  const imgClassName = classNames(classes.logo, classes.img);
  return (
    <img
      src={logowhite}
      className={imgClassName}
      alt="sensors.AFRICA"
      height="100"
    />
  );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logo);

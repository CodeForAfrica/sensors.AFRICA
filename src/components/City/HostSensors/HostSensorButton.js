import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonContained: {
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
    borderRadius: 0,
    fontWeight: 700,
    border: '1px solid transparent',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid rgba(0, 0, 0, 0.23)'
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      margin: theme.spacing.unit * 2
    }
  },
  buttonOutlined: {
    width: '100%',
    color: theme.palette.primary.dark,
    borderRadius: 0,
    fontWeight: 700,
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.dark,
      border: '1px solid rgba(0, 0, 0, 0.23)'
    },
    [theme.breakpoints.up('md')]: {
      width: 'auto',
      margin: theme.spacing.unit * 2
    }
  }
});

function HostSensorButton({ children, classes, outlined, onClick }) {
  const variant = outlined ? 'outlined' : 'contained';
  const className = outlined ? classes.buttonOutlined : classes.buttonContained;
  return (
    <Button
      variant={variant}
      size="large"
      className={className}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

HostSensorButton.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]).isRequired,
  outlined: PropTypes.bool,
  onClick: PropTypes.func
};
HostSensorButton.defaultProps = {
  outlined: false,
  onClick: null
};

export default withStyles(styles)(HostSensorButton);

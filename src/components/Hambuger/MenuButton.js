import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: 32,
    width: 32,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: 4,
    zIndex: '1301',
    position: 'relative',
  },
};

class MenuButton extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.open !== prevState.open) {
      return { open: nextProps.open };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const { open } = props;
    this.state = { open };
  }

  render() {
    const { classes, color, onClick } = this.props;
    const { open } = this.state;
    const dynamicStyles = {
      line: {
        height: 4,
        width: 28,
        background: color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: open ? 'rotate(45deg)' : 'none',
        marginBottom: open ? '0' : '4px',
      },
      lineMiddle: {
        opacity: open ? 0 : 1,
      },
      lineBottom: {
        transform: open ? 'rotate(-45deg)' : 'none',
        marginTop: open ? '-8px' : '4px',
      },
    };
    return (
      <div
        className={classes.container}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex="0"
      >
        <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineTop }} />
        <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineMiddle }} />
        <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineBottom }} />
      </div>
    );
  }
}

MenuButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};
MenuButton.defaultProps = {
  color: 'white',
  onClick: null,
  open: false,
};
export default withStyles(styles)(MenuButton);

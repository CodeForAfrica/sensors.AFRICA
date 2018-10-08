import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    height: '32px',
    width: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '4px'
  }
};
class MenuButton extends Component {
  constructor(props) {
    super(props);

    const { open } = props;
    this.state = { open };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.state;
    if (nextProps.open !== open) {
      this.setState({ open: nextProps.open });
    } else {
      this.setState({ open: true });
    }
  }

  handleClick() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { classes, color, onClick } = this.props;
    const { open } = this.setState;
    const dynamicStyles = {
      line: {
        height: '2px',
        width: '20px',
        background: color,
        transition: 'all 0.2s ease'
      },
      lineTop: {
        transform: open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px'
      },
      lineMiddle: {
        opacity: open ? 0 : 1,
        transform: open ? 'translateX(-16px)' : 'none'
      },
      lineBottom: {
        transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px'
      }
    };
    return (
      <div
        className={classes.container}
        onClick={onClick || this.handleClick()}
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
  classes: PropTypes.object.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool
};
MenuButton.defaultProps = {
  color: 'white',
  onClick: null,
  open: false
};
export default withStyles(styles)(MenuButton);

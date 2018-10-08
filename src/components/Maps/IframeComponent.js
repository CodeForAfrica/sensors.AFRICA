import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  fullHeight: {
    height: '90vh',
    display: 'inline-block',
    margin: '0 auto'
  }
};

class KenyaMap extends Component {
  render() {
    const { classes } = this.props;
    return (
      <iframe
        title={this.props.title}
        src={this.props.src}
        height={this.props.height}
        width={this.props.width}
        frameBorder={this.props.frameBorder}
        className={classes.fullheight}
        scrollling={this.props.scrolling}
      />
    );
  }
}

KenyaMap.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(KenyaMap);

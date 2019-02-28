import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  pointer: { fill: 'rgb(20, 74, 61)' }
};

class NeedlePointer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { classes } = this.props;
    return (
      <svg className={classes.gaugeNeedleItem}>
        <g transform="translate(450,300)">
          <path
            d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
            strokeLinecap="round"
            strokeWidth="5"
            stroke="#144a3d"
            style={{ cursor: 'grab' }}
          />
        </g>
      </svg>
    );
  }
}

export default withStyles(styles)(NeedlePointer);

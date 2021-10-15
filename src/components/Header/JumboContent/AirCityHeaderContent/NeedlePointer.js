/* eslint-disable no-nested-ternary */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Proptypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  pointer: { fill: 'rgb(20, 74, 61)' },
  gaugeBigText: {
    fontFamily: theme.typography.h6.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 700,
    fill: theme.palette.primary.dark,
  },
  hidden: {
    visibility: 'hidden',
  },
}));

function NeedlePointer({ hidden, measurement }) {
  const classes = useStyles();
  let rotate = -90;
  const className = hidden ? classes.hidden : '';

  // Limit the value to 160
  const value = measurement > 160 ? 160 : measurement;
  if (value > 60) {
    rotate = ((value - 60) * 45) / 100 + 45;
  } else {
    rotate = (value * (45 + 90)) / 60 + -90;
  }

  return (
    <g transform="translate(450,373)" className={className}>
      <path
        transform={`rotate(${rotate}) scale(1.2)`}
        d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
        strokeLinecap="round"
        strokeWidth="5"
        stroke="#144a3d"
        style={{ cursor: 'grab' }}
      />
      <text
        transform="scale(1.2)"
        x={`${
          -275 * Math.cos(((rotate + 90) * Math.PI) / 180) +
          (measurement > 55 ? 5 : -2.5)
        }`}
        y={`${-275 * Math.sin(((rotate + 90) * Math.PI) / 180)}`}
        textAnchor={
          measurement > 25 && measurement < 55
            ? 'middle'
            : measurement > 40
            ? 'start'
            : 'end'
        }
      >
        <tspan className={classes.gaugeBigText}>
          {Math.round(measurement * 10) / 10}
        </tspan>
      </text>
    </g>
  );
}

NeedlePointer.propTypes = {
  hidden: Proptypes.bool.isRequired,
  measurement: Proptypes.number.isRequired,
};

export default NeedlePointer;

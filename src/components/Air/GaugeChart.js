import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    maxWidth: '100%',
    margin: 'auto',
  },
  background: {
    stroke: 'white',
  },
  stroke: {
    fill: 'none',
    stroke: theme.palette.primary.light,
    strokeWidth: '7.4',
  },
  readingBackground: {
    fill: 'none',
    stroke: 'white',
    // anything less than readingStroke's strokeWidth to make sure there isn't
    // any visible white gap between the two
    strokeWidth: '4.5',
  },
  readingStroke: {
    fill: 'none',
    stroke: theme.palette.primary.light,
    strokeWidth: '4.8',
    animation: 'progress 1s ease-out forwards',
  },
  label: {
    fill: '#666',
    stroke: '#666',
    strokeWidth: '0.25',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    fontSize: '0.35em',
    textAnchor: 'middle',
  },
  '@keyframes progress': {
    from: {
      strokeDashoffset: '100',
    },
    to: {
      strokeDashoffset: '200',
    },
  },
}));

function GaugeChart({ percentage, ...props }) {
  const classes = useStyles(props);

  return (
    <svg
      viewBox="-2 -2 40 40"
      className={classNames(classes.root, classes.background)}
    >
      <path
        className={classes.stroke}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={classes.readingBackground}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={classes.readingStroke}
        strokeDasharray={`${percentage} 100`}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={classes.label}>
        {percentage}%
      </text>
    </svg>
  );
}

GaugeChart.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default GaugeChart;

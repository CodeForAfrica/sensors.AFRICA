import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  circularChart: {
    display: 'block',
    maxWidth: '100%',
    margin: 'auto'
  },
  circularChartWhiteCircle: {
    display: 'block',
    stroke: '#fff'
  },
  circleBg: {
    fill: 'none',
    stroke: '#2FB56B',
    strokeWidth: '4.4'
  },
  percentage: {
    fill: '#666',
    stroke: '#666',
    strokeWidth: '0.25',
    fontFamily: 'sans-serif',
    fontSize: '0.35em',
    textAnchor: 'middle'
  },
  circle: {
    fill: 'none',
    strokeWidth: '3.8',
    strokeLinecap: 'none',
    animation: 'progress 1s ease-out forwards'
  },
  '@keyframes progress': {
    '0%': {
      strokeDasharray: '0 100'
    }
  }
};

function GaugeChart(props) {
  const { classes, percentage } = props;
  return (
    <svg
      viewBox="0 0 37 37"
      className={(classes.circularChart, classes.circularChartWhiteCircle)}
    >
      <path
        className={classes.circleBg}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className={classes.circle}
        strokeDasharray={`${percentage} 100`}
        d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" className={classes.percentage}>
        {percentage}%
      </text>
    </svg>
  );
}

GaugeChart.propTypes = {
  classes: PropTypes.object.isRequired,
  percentage: PropTypes.number.isRequired
};

export default withStyles(styles)(GaugeChart);

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  circularChart: {
    display: 'block',
    maxWidth: '100%',
    margin: 'auto'
  },
  circularChartWhiteCircle: {
    display: 'block',
    stroke: '#fff',
    margin: 'auto'
  },
  circleBg: {
    fill: 'none',
    stroke: theme.palette.primary.light,
    strokeWidth: '7.4'
  },
  percentage: {
    fill: '#666',
    stroke: '#666',
    strokeWidth: '0.25',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 600,
    fontSize: '0.35em',
    textAnchor: 'middle'
  },
  circle: {
    fill: 'none',
    strokeWidth: '4.8',
    strokeLinecap: 'none',
    animation: 'progress 1s ease-out forwards'
  },
  '@keyframes progress': {
    from: {
      strokeDashoffset: '100'
    },
    to: {
      strokeDashoffset: '200'
    }
  }
});

function GaugeChart(props) {
  const { classes, percentage } = props;
  return (
    <svg
      viewBox="-2 -2 40 40"
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
  percentage: PropTypes.number.isRequired
};

export default withStyles(styles)(GaugeChart);

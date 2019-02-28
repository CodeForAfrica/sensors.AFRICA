import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VictoryPie, VictoryLabel } from 'victory';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NeedlePointer from './NeedlePointer';

const styles = theme => ({
  root: {
    position: 'relative'
  },
  gaugeDescription: {
    position: 'absolute'
  },
  gaugeDescGuideline: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: '10rem',
      marginLeft: '15%',
      padding: '40px 10px'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      padding: '10px 10px'
    },
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '250px',
    marginLeft: '20%',
    padding: '40px 15px',
    marginTop: '-30%',
    border: '1px white solid'
  },
  gaugeBoxWhoTitle: {
    display: 'block'
  },
  gaugeDial: {
    position: 'absolute'
  },
  gaugeWhoGuidelineText: {
    font: `bold ${theme.typography.body1.fontSize} ${
      theme.typography.h6.fontFamily
    }`,
    fill: 'white'
  },
  gaugeNeedleItem: {
    [theme.breakpoints.down('sm')]: {
      top: '90px'
    },
    width: '900px',
    height: '300px',
    position: 'absolute'
  },

  gaugeArc: {
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      height: '200px'
    },
    width: '600px',
    height: '300px'
  },
  gaugeWhiteItem: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  pointer: {
    fill: 'rgb(20, 74, 61)'
  },
  gaugeCircle: {
    width: '300px',
    height: '150px',
    top: '10rem',
    justify: 'center',
    position: 'absolute'
  },
  gaugeBigText: {
    fontFamily: theme.typography.h6.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 700,
    fill: '#164a3e'
  },
  gaugeSmallText: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.caption.fontFamily,
    fontWeight: theme.typography.caption.fontWeight,
    fill: '#164a3e'
  },
  gaugeDescUnits: {
    color: 'white',
    textAlign: 'center',
    width: '250px',
    padding: '40px 15px',
    marginTop: '-30%'
  }
});

const colors = [
  '#5FBF82',
  '#5FBE84',
  '#34B771',
  '#34B86F',
  '#299A5C',
  '#299A5C',
  '#CF8D52',
  '#CE8E4E',
  '#CE7C4C',
  '#CE7C4C',
  '#D45F4B',
  '#D45F4B',
  '#CF4B34',
  '#CF4B34',
  '#B91F27',
  '#B72024'
];

const data = [
  { x: 0, y: 150 },
  { x: 5, y: 150 },
  { x: 10, y: 150 },
  { x: 15, y: 150 },
  { x: 20, y: 150 },
  { x: 25, y: 150 },
  { x: 30, y: 150 },
  { x: 35, y: 150 },
  { x: 40, y: 150 },
  { x: 45, y: 150 },
  { x: 50, y: 150 },
  { x: 55, y: 150 },
  { x: 60, y: 150 },
  { x: 90, y: 150 },
  { x: 120, y: 150 },
  { x: 150, y: 150 }
];

class RadialGauge extends Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const { airPollMeasurement } = this.props;
    {
      const node = this.nodeRef.current;
      if (node instanceof HTMLElement) {
        const gaugeLabels = node.querySelectorAll('.label > text');
        let deg = -90;
        for (let i = 0; i < gaugeLabels.length; i += 1) {
          const valueLabel = gaugeLabels[i];
          if (valueLabel.hasAttribute('transform')) {
            const newtrans = `rotate(${deg}) translate(0,-200)`;
            deg += 22.5;
            valueLabel.setAttribute('transform', newtrans);
            valueLabel.setAttribute('style', 'fill: white');
          }
        }

        // Set value outside the arc
        const currentVal = node.querySelector('text');
        let transform = 0;
        if (currentVal) {
          transform = ((airPollMeasurement / 160) * 180).toFixed(2) - 90;
          currentVal.setAttribute(
            'transform',
            `rotate(${transform}) translate(0,-310)`
          );
        }

        // Customise pointer
        //const pointer = node.querySelector('.pointer > path');
        //pointer.setAttribute('stroke-width', '10');
        //pointer.setAttribute('stroke', '#144a3d');
        //if (pointer.hasAttribute('transform')) {
        //pointer.setAttribute('transform', `rotate(${transform})`);
        //}
      }
    }
  }

  render() {
    const { classes, percentageRelative, isOverGuideline } = this.props;
    let { airPollMeasurement } = this.props;

    // Texts on top of the gauge
    let gaugeText = 'AT THE';
    let gaugeBigText = 'SAFE LEVEL';
    if (isNaN(airPollMeasurement)) {
      gaugeText = 'Measurements not';
      gaugeBigText = 'Recorded';
      airPollMeasurement = 0;
    } else if (isOverGuideline) {
      gaugeText = `${percentageRelative.toFixed(1)}% OVER THE`;
    } else {
      gaugeText = `${percentageRelative.toFixed(1)}% BELOW THE`;
    }

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.gaugeDial}
          justify="center"
          alignItems="center"
          style={{ height: 'auto' }}
          ref={this.nodeRef}
        >
          <Grid item md={12} container alignItems="center" direction="column">
            <svg height="700px" width="700px">
              <g transform="translate(0,-42)">
                <VictoryPie
                  colorScale={colors}
                  startAngle={-90}
                  endAngle={90}
                  standalone={false}
                  padAngle={0.4}
                  width={700}
                  height={700}
                  innerRadius={230}
                  labelRadius={210}
                  data={data}
                  //value={parseFloat(airPollMeasurement.toFixed(1))}
                  textAnchor="start"
                  labelComponent={
                    <VictoryLabel
                      className={classes.label}
                      transform="translate(-26,38) rotate(-5)"
                      verticalAnchor="middle"
                      textAnchor="end"
                    />
                  }
                  style={{
                    labels: {
                      display: 'inline-block',
                      fill: 'white'
                    }
                  }}
                />
              </g>
            </svg>

            <svg className={classes.gaugeNeedleItem}>
              <g transform="translate(450,300)">
                <path
                  d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                  fill="#144a3d"
                  transform="rotate(-34.75)"
                  strokeLinecap="butt"
                  strokeWidth="3"
                  stroke="#fefffd"
                  style={{ cursor: 'grab' }}
                />
              </g>

              <NeedlePointer />

              <g transform="translate(195,65)" fill="white">
                <text
                  fill="white"
                  textAnchor="middle"
                  className={classes.gaugeWhoGuidelineText}
                >
                  WHO GUIDELINE
                </text>
              </g>
            </svg>

            <svg className={classes.gaugeCircle}>
              <circle
                r="150"
                cx="150"
                cy="150"
                fill="white"
                className={classes.gaugeWhiteItem}
              />
              <circle r="75" cx="150" cy="150" fill="white" />
              <g transform="translate(150,60)" style={{ height: '30px' }}>
                <text
                  transform="translate(0,10)"
                  textAnchor="middle"
                  className={classes.gaugeBigText}
                >
                  {gaugeText}
                </text>
                <text
                  transform="translate(0,40)"
                  textAnchor="middle"
                  className={classes.gaugeBigText}
                >
                  {gaugeBigText}
                </text>
                <text
                  transform="translate(0,70)"
                  textAnchor="middle"
                  className={classes.gaugeSmallText}
                >
                  PM
                  <tspan baselineShift="sub">2.5 </tspan>
                  DAILY EXPOSURE
                </text>
              </g>
            </svg>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.gaugeDescription}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <p className={classes.gaugeDescGuideline}>
              <span className={classes.gaugeBoxWhoTitle}>
                WHO Guideline (10)
              </span>
              Lowest level at which premature mortality increases in response to
              long-term exposure
            </p>
          </Grid>
          <Grid item>
            <p className={classes.gaugeDescUnits}>
              <strong>
                *PM
                <sub>2.5</sub> concentrations measured in micrograms of
                particles per cubic meter of air (µg/m <sup>3</sup>)
              </strong>
              <br />
              <br />
              <em>Data: WHO Global Platform on Air Quality &amp; Health</em>
            </p>
          </Grid>
        </Grid>
      </div>
    );
  }
}

RadialGauge.propTypes = {
  classes: PropTypes.object.isRequired,
  airPollMeasurement: PropTypes.number.isRequired,
  percentageRelative: PropTypes.number.isRequired,
  isOverGuideline: PropTypes.bool.isRequired
};

export default withStyles(styles)(RadialGauge);

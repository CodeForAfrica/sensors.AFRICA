import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { VictoryPie, VictoryLabel } from 'victory';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import NeedlePointer from 'components/Header/JumboContent/AirCityHeaderContent/NeedlePointer';

const styles = (theme) => ({
  root: {
    position: 'relative',
    paddingTop: '36px',
    width: 'inherit',
    height: 'inherit',
  },
  gaugeDescription: {
    position: 'absolute',
  },
  gaugeDescGuideline: {
    [theme.breakpoints.between('sm', 'md')]: {
      width: '10rem',
      marginLeft: '15%',
      padding: '40px 10px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      padding: '10px 10px',
    },
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    width: '250px',
    marginLeft: '10%',
    padding: '40px 15px',
    marginTop: '-30%',
    border: '1px white solid',
  },
  gaugeBoxWhoTitle: {
    display: 'block',
  },
  gaugeDial: {
    position: 'absolute',
  },
  gaugeWhoGuidelineText: {
    font: `bold ${theme.typography.body1.fontSize} ${theme.typography.h6.fontFamily}`,
    fill: 'white',
  },
  gaugeNeedleItem: {
    width: '900px',
    height: '500px',
    position: 'absolute',
  },

  gaugeArc: {
    [theme.breakpoints.down('sm')]: {
      width: '400px',
      height: '200px',
    },
    width: '600px',
    height: '300px',
  },
  pointer: {
    fill: 'rgb(20, 74, 61)',
  },
  gaugeCircle: {
    width: 350,
    height: 175,
    top: 208,
    position: 'absolute',
  },
  gaugeBigText: {
    fontFamily: theme.typography.h6.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: 700,
    fill: theme.palette.primary.dark,
    textTransform: 'uppercase',
  },
  gaugeSmallText: {
    fontSize: theme.typography.caption.fontSize,
    fontFamily: theme.typography.caption.fontFamily,
    fontWeight: theme.typography.caption.fontWeight,
    fill: theme.palette.primary.dark,
  },
  gaugeDescUnits: {
    color: 'white',
    textAlign: 'center',
    width: '250px',
    padding: '40px 15px',
    marginTop: '-30%',
  },
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
  '#B72024',
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
  { x: '150 +', y: 150 },
];

class RadialGauge extends Component {
  constructor(props) {
    super(props);
    this.nodeRef = React.createRef();
  }

  componentDidMount() {
    const { airPollMeasurement } = this.props;
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
    }
  }

  render() {
    const { airPollDescription, airPollMeasurement, classes } = this.props;
    let gaugeTextLine1;
    let gaugeTextLine2;
    let isNeedleHidden = false;
    let value = airPollMeasurement;

    if (airPollMeasurement === '--') {
      gaugeTextLine1 = 'Measurements not';
      gaugeTextLine2 = 'Recorded';

      // Hide the needle when we don't have measurements
      // but ensure value is still a number since needle doesn't check
      isNeedleHidden = true;
      value = 0.0;
    } else {
      const lines = airPollDescription.split(' safe ');
      [gaugeTextLine1] = lines;
      gaugeTextLine2 = `safe level`;
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
            <svg height="700px" width="700px" style={{ paddingTop: 71 }}>
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
                  textAnchor="start"
                  labelComponent={
                    <VictoryLabel
                      transform="translate(-26,38) rotate(-5)"
                      verticalAnchor="middle"
                      textAnchor="end"
                    />
                  }
                  style={{
                    labels: {
                      display: 'inline-block',
                      fill: 'white',
                      fontFamily: '"Montserrat", "sans-serif"',
                    },
                  }}
                />
              </g>
            </svg>

            <svg className={classes.gaugeNeedleItem}>
              <svg viewBox="0 0 750 750">
                <g transform="translate(39,120)">
                  <line
                    x1="50"
                    y1="10"
                    x2="160"
                    y2="180"
                    fill="#144a3d"
                    stroke="white"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <line
                    x1="50"
                    y1="10"
                    x2="160"
                    y2="180"
                    fill="#144a3d"
                    stroke="#144a3d"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </g>
              </svg>

              <NeedlePointer measurement={value} hidden={isNeedleHidden} />
              <g transform="translate(165,85)" fill="white">
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
                r="175"
                cx="175"
                cy="175"
                fill="white"
                className={classes.gaugeWhiteItem}
              />
              <circle r="87.5" cx="175" cy="175" fill="white" />
              <g transform="translate(175,80)" style={{ height: '30px' }}>
                <text
                  transform="translate(0,10)"
                  textAnchor="middle"
                  className={classes.gaugeBigText}
                >
                  {gaugeTextLine1}
                </text>
                <text
                  transform="translate(0,40)"
                  textAnchor="middle"
                  className={classes.gaugeBigText}
                >
                  {gaugeTextLine2}
                </text>
                <text
                  transform="translate(0,70)"
                  textAnchor="middle"
                  className={classes.gaugeSmallText}
                >
                  PM
                  <tspan baselineShift="sub">2.5 </tspan>
                  24 HOURS EXPOSURE*
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
  airPollMeasurement: PropTypes.string.isRequired,
  airPollDescription: PropTypes.string.isRequired,
};

export default withStyles(styles)(RadialGauge);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSpeedometer from 'react-d3-speedometer';

import { Grid, Hidden } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  gaugeBox: {
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
  gaugeDesc: {
    [theme.breakpoints.between('sm', 'md')]: {
      bottom: '0',
      width: '80%',
      padding: '40px 0px'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '0px',
      padding: '20px 15px',
      width: '300px'
    },
    color: 'white',
    textAlign: 'center',
    width: '250px',
    padding: '40px 15px',
    marginTop: '-30%'
  },
  gaugeWho: {
    [theme.breakpoints.down('sm')]: {
      bottom: '31%',
      left: '3%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      left: '7%'
    },
    color: 'white',
    bottom: '10%',
    left: '25%',
    position: 'absolute'
  },
  gaugeNeedleItem: {
    [theme.breakpoints.down('sm')]: {
      top: '90px'
    },
    width: '600px',
    height: '300px',
    top: '80px',
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
  gaugeCircle: {
    [theme.breakpoints.down('sm')]: {
      top: '15rem'
    },
    width: '300px',
    height: '150px',
    top: '15rem',
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
  }
});

class CityGauge extends Component {
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
      const currentVal = node.querySelector('.current-value');
      let transform = 0;
      if (currentVal) {
        transform =
          ((parseFloat(airPollMeasurement) / 160) * 180).toFixed(2) - 90;
        currentVal.setAttribute(
          'transform',
          `rotate(${transform}) translate(0,-310)`
        );
      }

      // Customise pointer
      const pointer = node.querySelector('.pointer > path');
      pointer.setAttribute('stroke-width', '10');
      pointer.setAttribute('stroke', '#144a3d');
      if (pointer.hasAttribute('transform')) {
        pointer.setAttribute('transform', `rotate(${transform})`);
      }
    }
  }

  render() {
    const { classes } = this.props;
    let { airPollMeasurement } = this.props;

    // Texts on top of the gauge
    let gaugeText = 'AT THE';
    let gaugeBigText = 'SAFE LEVEL';
    if (isNaN(airPollMeasurement)) {
      gaugeText = 'Measurements not';
      gaugeBigText = 'Recorded';
      airPollMeasurement = 0;
    } else {
      const airStat = ((parseFloat(airPollMeasurement) / 10) * 100).toFixed(1);
      if (airStat > 100) {
        gaugeText = `${(airStat - 100).toFixed(1)}% OVER THE`;
      } else if (airStat < 100) {
        gaugeText = `${(100 - airStat).toFixed(1)}% BELOW THE`;
      }
    }
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ paddingTop: '0.45rem', height: 'auto' }}
        ref={this.nodeRef}
      >
        <Hidden smDown>
          <Grid container item xs={12} md={3} lg={3} direction="column">
            <p className={classes.gaugeBox}>
              <span className={classes.gaugeBoxWhoTitle}>
                WHO Guideline (10)
              </span>
              Lowest level at which premature mortality increases inresponse to
              long term exposure
            </p>
          </Grid>
        </Hidden>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          container
          alignItems="center"
          direction="column"
        >
          <p className={classes.gaugeWho}>
            <strong>WHO GUIDELINE</strong>
          </p>
          <div className={classes.gaugeArc}>
            <ReactSpeedometer
              fluidWidth
              ringWidth={60}
              minValue={0}
              maxValue={150}
              value={parseFloat(airPollMeasurement)}
              segments={8}
              startColor="#5fbf82"
              endColor="#b72025"
              needleColor="#144a3d"
            />
          </div>
          <svg className={classes.gaugeNeedleItem}>
            <g transform="translate(300,300)">
              <path
                d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                fill="#144a3d"
                transform="rotate(-78.75)"
                strokeLinecap="round"
                strokeWidth="3"
                stroke="#fefffd"
                style={{ cursor: 'grab' }}
              />
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
                ANNUAL EXPOSURE
              </text>
            </g>
          </svg>
        </Grid>
        <Hidden smDown>
          <Grid container item xs={12} md={3} direction="column">
            <p className={classes.gaugeDesc}>
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
        </Hidden>
      </Grid>
    );
  }
}

CityGauge.propTypes = {
  classes: PropTypes.object.isRequired,
  airPollMeasurement: PropTypes.string.isRequired
};

export default withStyles(styles)(CityGauge);

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactSpeedometer from 'react-d3-speedometer';

import Grid from '@material-ui/core/Grid';

class CityGauge extends Component {
  componentDidMount() {
    if (this.node instanceof HTMLElement) {
      const gaugeLabels = this.node.querySelectorAll('.label > text');
      let deg = -90;
      for (let i = 0; i < gaugeLabels.length; i += 1) {
        const valueLabel = gaugeLabels[i];
        if (valueLabel.hasAttribute('transform')) {
          const newtrans = `rotate(${deg}) translate(0,-200)`;
          deg += 22.5;
          valueLabel.setAttribute('transform', newtrans);
        }
      }

      let transform = 0;
      const currentVal = this.node.querySelector('.current-value');
      const { airPollMeasurement } = this.props;
      if (currentVal) {
        transform = ((airPollMeasurement / 160) * 180).toFixed(2) - 90;
        currentVal.setAttribute(
          'transform',
          `rotate(${transform}) translate(0,-315)`
        );
      }

      const pointer = this.node.querySelector('.pointer > path');
      pointer.setAttribute('stroke-width', '10');
      pointer.setAttribute('stroke', '#144a3d');
      if (pointer.hasAttribute('transform')) {
        pointer.setAttribute('transform', `rotate(${transform})`);
      }
    }
  }

  render() {
    const { airPollMeasurement } = this.props;
    const airStat = ((airPollMeasurement / 10) * 100).toFixed(1);
    let gaugeText = '';
    if (airStat > 100) {
      gaugeText = `${airStat - 100}% OVER THE`;
    } else if (airStat < 100) {
      gaugeText = `${100 - airStat}% BELOW THE`;
    } else {
      gaugeText = 'AT THE ';
    }
    return (
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: '0.6rem', height: '308px' }}
        ref={node => {
          this.node = node;
        }}
      >
        <Grid container item xs={4} direction="column">
          <p
            style={{
              color: 'white',
              textAlign: 'center',
              width: '250px',
              marginLeft: '20%',
              padding: '40px 15px',
              marginTop: '-30%',
              border: '1px white solid'
            }}
          >
            WHO Guideline (10) Lowest level at which premature mortality
            increases inresponse to long term exposure
          </p>

          <p
            style={{
              color: 'white',
              bottom: '14%',
              left: '25%',
              position: 'absolute'
            }}
          >
            <strong>WHO GUIDELINE</strong>
          </p>
        </Grid>
        <Grid container item xs={4} direction="column">
          <ReactSpeedometer
            fluidWidth={false}
            width={600}
            height={300}
            ringWidth={60}
            minValue={0}
            maxValue={150}
            value={airPollMeasurement}
            segments={8}
            startColor="#5fbf82"
            endColor="#b72025"
            needleColor="#144a3d"
            textColor="#144a3d"
          />
          <svg
            style={{
              width: '600px',
              height: '300px',
              top: '64px',
              left: '30%',
              position: 'absolute'
            }}
          >
            <g transform="translate(300,300)">
              <path
                d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0"
                fill="#144a3d"
                transform="rotate(-78.75)"
                strokeLinecap="round"
                strokeWidth="3"
                stroke="#fefffd"
                style={{ cursor: 'grab -webkit-grab' }}
              />
            </g>
          </svg>
          <svg
            style={{
              width: '300px',
              height: '150px',
              top: '14rem',
              right: '42%',
              justify: 'center',
              position: 'absolute'
            }}
          >
            <circle r="150" cx="150" cy="150" fill="white" />
            <g transform="translate(150,60)" style={{ height: '30px' }}>
              <text
                transform="translate(0,10)"
                textAnchor="middle"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fill: '#164a3e'
                }}
              >
                {gaugeText}
              </text>
              <text
                transform="translate(0,40)"
                textAnchor="middle"
                style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  fill: '#164a3e'
                }}
              >
                SAFE LEVEL
              </text>
              <text
                transform="translate(0,70)"
                textAnchor="middle"
                style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  fill: '#164a3e'
                }}
              >
                PM
                <tspan baselineShift="sub">2.5 </tspan>
                ANNUAL EXPOSURE
              </text>
            </g>
          </svg>
        </Grid>
        <Grid container item xs={4} direction="column">
          <p
            style={{
              color: 'white',
              textAlign: 'center',
              width: '250px',
              marginLeft: '30%',
              padding: '40px 15px',
              marginTop: '-30%'
            }}
          >
            <strong>
              *PM
              <sub>2.5</sub> concentrations measured in microgrmas of particles
              per cubic meter of air <span>&#181;</span>
              g/m3
            </strong>
            <br />
            <br />
            <em>Data: WHO Global Platform on Air Quality &amp; Health</em>
          </p>
        </Grid>
      </Grid>
    );
  }
}

CityGauge.propTypes = {
  airPollMeasurement: PropTypes.number.isRequired
};

export default CityGauge;

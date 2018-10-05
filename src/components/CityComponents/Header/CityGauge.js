import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactSpeedometer from "react-d3-speedometer";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  gaugeText: {
    fontSize: "16px"
  }
};

class CityGauge extends Component {

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
      const pointer = node.querySelector('.pointer > path');
      pointer.setAttribute('stroke-width', '10');
      pointer.setAttribute('stroke', '#144a3d');

      const gaugeLabels = node.querySelectorAll('.label > text');
      for (let valueLabel of gaugeLabels) {
        if(valueLabel.hasAttribute('transform')) {
          let trans = valueLabel.getAttribute('transform');
          let newtrans = trans.split(' ')[0] + " translate(0,-200)";
          valueLabel.setAttribute('transform', newtrans);
        //  valueLabel.setAttribute('class', 'gaugeText');
        //  <g transform="translate(300,300)" style={{top: "10rem"}}>
        //   <path d="M5,0C3.333333333333333,-135,1.6666666666666667,-270,0,-270C-1.6666666666666667,-270,-3.333333333333333,0,-5,0C-3.333333333333333,0,-1.6666666666666667,5,0,5C1.6666666666666667,5,3.333333333333333,2.5,5,0" transform="rotate(-78)" stroke-width="10" stroke="#144a3d"></path>
        // </g>
        }
      }
    }

  }
  render() {
    return (
      <div style={{ width: "600px",height: "300px"}}>
        <ReactSpeedometer
              fluidWidth={false}
              width={600}
              height={300}
              ringWidth={60}
              minValue={0}
              maxValue={150}
              value={17}
              segments={8}
              textColor="white"
              startColor="#5fbf82"
              endColor="#b72025"
              needleColor="#144a3d"
         />
         <svg style={{ width: "300px", height: "150px", top: "14rem", right: "42%", justify:"center", position: "absolute" }}>
           <circle
             r="150"
             cx="150"
             cy="150"
             fill="white"
           />
           <text fill="black" style={{justify:"center", position: "absolute", top: "5rem", zIndex: "1000"}}>THE AIR POLLUTION IN{" "} </text>
         </svg>
      </div>
    )
  }
}
export default withStyles(styles)(CityGauge);

import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ReactSpeedometer from "react-d3-speedometer";


export default class CityGauge extends Component {

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    if (node instanceof HTMLElement) {
      const pointer = node.querySelector('.pointer > path');
      console.log(pointer);
      pointer.setAttribute('stroke-width', '10');
      pointer.setAttribute('stroke', '#144a3d');
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
              value={20}
              segments={8}
              startColor="#5fbf82"
              endColor="#b72025"
              needleColor="#144a3d"
         >
         </ReactSpeedometer>
         <svg style={{ width: "300px", height: "150px", top: "14rem", right: "42%", justify:"center", position: "absolute" }}>
           <circle
             r="150"
             cx="150"
             cy="150"
             fill="white"
           />
         </svg>
      </div>
    )
  }
}

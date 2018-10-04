import React, { Component } from "react";
import ReactSpeedometer from "react-d3-speedometer";


export default class CityGauge extends Component {
  render() {
    return (
      <div style={{ width: "500px",height: "300px", background: "#EFEFEF"}}>
        <ReactSpeedometer
              fluidWidth={true}
              minValue={100}
              maxValue={500}
              value={473}
              startColor="#5fbf82"
              endColor="#b72025"
              needleColor="steelblue"
         />
      </div>
    )
  }
}

import React, { Component } from "react";
import axios from "axios";

class Api extends Component {
  constructor() {
    super();
    this.state = {
      sensors: []
    };
  }
  componentDidMount() {
    axios.get("http://api.airquality.codeforafrica.org/v1/now/").then(json => {
      console.log(json);
      this.setState({
        sensors: json.data
      });
    });
  }
  render() {
    const { sensors } = this.state;
    return (
      <div>
        <h1>This is the city page </h1>
        <ul>
          {sensors.map(sensor => (
            <li key={sensor.sensor.id}>
              pin: {sensor.sensor.pin}
              timestamp:
              {sensor.timestamp}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Api;

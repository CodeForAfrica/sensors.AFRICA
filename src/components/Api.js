import React, { Component } from 'react';

import axios from 'axios';

class Api extends Component {
  constructor() {
    super();
    this.state = {
      sensors: []
    };
  }

  componentDidMount() {
    axios.get('http://api.airquality.codeforafrica.org/v1/now/').then(json => {
      this.setState({
        sensors: json.data
      });
    });
  }

  render() {
    const { sensors } = this.state;
    return (
      <div>
        <h1>
          This is the city page: All sensors.AFRICA information printed here{' '}
        </h1>
        <ul>
          {sensors.map(sensor => (
            <li key={sensor.sensor.id}>
              {sensor.id},{sensor.timestamp},{sensor.sensor.pin}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Api;

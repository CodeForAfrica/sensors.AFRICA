import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import About from './About';
import HowSensorsWork from './HowSensorsWork';
import City from './City';
import JoinNetwork from './JoinNetwork';
import Navbar from '../../components/Header/Navbar';
import AirHeader from '../../components/AirComponents/AirHeader';
import Footer from '../../components/Footer';
import IndoorOutdoor from '../../components/AirComponents/IndoorOutdoor';
import Issues from '../../components/AirComponents/Issues';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';

const CITY_PATHNAME = '/air/city/';
class AirHome extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(city) {
    const { history } = this.props;

    history.push(CITY_PATHNAME, {city} );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <AirHeader handleChange={this.handleChange} />
        <Issues />
        <IndoorOutdoor />
        <Stories />
        <Support />
        <Footer />
      </React.Fragment>
    );
  }
}

AirHome.propTypes = {
  history: PropTypes.object.isRequired
};

export { About, HowSensorsWork, City, JoinNetwork };
export default withRouter(AirHome);

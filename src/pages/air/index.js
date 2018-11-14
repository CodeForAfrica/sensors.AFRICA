import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import About from './About';
import HowSensorsWork from './HowSensorsWork';
import City from './City';
import JoinNetwork from './JoinNetwork';
import Navbar from '../../components/Header/Navbar';
import AirHeader from '../../components/Air/AirHeader';
import Footer from '../../components/Footer';
import IndoorOutdoor from '../../components/Air/IndoorOutdoor';
import Issues from '../../components/Air/Issues';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';
import HealthAndClimateImpacts from './HealthAndClimateImpacts';

const CITY_PATHNAME = '/air/city';
class AirHome extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const { history } = this.props;

    history.push(CITY_PATHNAME, { city: city.value });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <AirHeader handleSearch={this.handleSearch} />
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

export { About, HowSensorsWork, City, JoinNetwork, HealthAndClimateImpacts };
export default withRouter(AirHome);

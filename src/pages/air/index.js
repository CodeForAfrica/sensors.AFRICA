import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import DocumentHead from '../../components/DocumentHead';
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
import Showcase from '../../components/Showcase';

const CITY_PATHNAME = '/air/city';
class AirHome extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const path = `${CITY_PATHNAME}/${city.value}`;
    const { history } = this.props;
    history.push(path);
  }

  render() {
    const { url } = this.props;
    return (
      <React.Fragment>
        <DocumentHead url={url} />
        <Navbar />
        <AirHeader handleSearch={this.handleSearch} />
        <Showcase />
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
  history: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export { About, HowSensorsWork, City, JoinNetwork, HealthAndClimateImpacts };
export default withRouter(AirHome);

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import DocumentHead from '../../components/DocumentHead';
import About from './About';
import Data from './Data';
import HowSensorsWork from './HowSensorsWork';
import City from './City';
import JoinNetwork from './JoinNetwork';
import Navbar from '../../components/Header/Navbar';
import AirHeader from '../../components/Air/AirHeader';
import Footer from '../../components/Footer';
import PartnerLogos from '../../components/PartnerLogos';
import IndoorOutdoor from '../../components/Air/IndoorOutdoor';
import Issues from '../../components/Air/Issues';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';
import HealthAndClimateImpacts from './HealthAndClimateImpacts';
import Showcase from '../../components/Showcase';

class AirHome extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(city) {
    const path =
      city.value === 'locate-me' ? '/air/locate-me' : `/air/city/${city.value}`;
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
        <PartnerLogos />
        <Footer />
      </React.Fragment>
    );
  }
}

AirHome.propTypes = {
  history: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export {
  About,
  HowSensorsWork,
  City,
  JoinNetwork,
  Data,
  HealthAndClimateImpacts
};
export default withRouter(AirHome);

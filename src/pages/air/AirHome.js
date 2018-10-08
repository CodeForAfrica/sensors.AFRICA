import React from 'react';

import Navbar from '../../components/Header/Navbar';
import AirHeader from '../../components/AirComponents/AirHeader';
import Footer from '../../components/Footer';
import IndoorOutdoor from '../../components/AirComponents/IndoorOutdoor';
import Issues from '../../components/AirComponents/Issues';
import Stories from '../../components/About/Stories';
import Support from '../../components/Support';

function AirHome() {
  return (
    <React.Fragment>
      <Navbar />
      <AirHeader />
      <Issues />
      <IndoorOutdoor />
      <Stories />
      <Support />
      <Footer />
    </React.Fragment>
  );
}

export default AirHome;

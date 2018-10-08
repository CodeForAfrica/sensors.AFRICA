import React, { Component } from "react";

import Navbar from "../../components/Header/Navbar";
import Stories from "../../components/About/Stories";
import Support from "../../components/Support";
import Footer from "../../components/Footer";

import Issues from "../../components/AirComponents/Issues";
import IndoorOutdoor from "../../components/AirComponents/IndoorOutdoor";
import AirHeader from "../../components/AirComponents/AirHeader";

class AirHome extends Component {
  render() {
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
}

export default AirHome;

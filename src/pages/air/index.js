import React from 'react';

import { useRouter } from 'next/router';

import Navbar from 'components/Header/Navbar';
import Footer from 'components/Footer';
import PartnerLogos from 'components/PartnerLogos';
import IndoorOutdoor from 'components/Air/IndoorOutdoor';
import Issues from 'components/Air/Issues';
import Stories from 'components/About/Stories';
import AirHeader from 'components/Air/AirHeader';
import Support from 'components/Support';

import About from 'pages/air/about';
import Data from 'pages/air/data';
import HowSensorsWork from 'pages/air/how-sensors-work';
import JoinNetwork from 'pages/air/join-network';
import HealthAndClimateImpacts from 'pages/air/health-and-climate-impact';

const CITY_PATHNAME = '/air/city';

function AirHome() {
  const router = useRouter();
  const handleSearch = city => {
    router.push(`${CITY_PATHNAME}/${city.value}`);
  };

  return (
    <>
      <Navbar />
      <AirHeader handleSearch={handleSearch} />
      <Issues />
      <IndoorOutdoor />
      <Stories />
      <Support />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export { About, HowSensorsWork, JoinNetwork, Data, HealthAndClimateImpacts };

export default AirHome;

import { useRouter } from "next/router";
import React from "react";

import Stories from "@/sensorsafrica/components/About/Stories";
import IndoorOutdoor from "@/sensorsafrica/components/Air/IndoorOutdoor";
import Issues from "@/sensorsafrica/components/Air/Issues";
import DocumentHead from "@/sensorsafrica/components/DocumentHead";
import { URLS } from "@/sensorsafrica/components/DocumentHead/PageHeads";
import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import PageHeader from "@/sensorsafrica/components/PageHeader";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import Showcase from "@/sensorsafrica/components/Showcase";
import Support from "@/sensorsafrica/components/Support";
import About from "@/sensorsafrica/pages/air/about";
import Data from "@/sensorsafrica/pages/air/data";
import HealthAndClimateImpacts from "@/sensorsafrica/pages/air/health-and-climate-impact";
import HowSensorsWork from "@/sensorsafrica/pages/air/how-sensors-work";
import JoinNetwork from "@/sensorsafrica/pages/air/join-network";

const CITY_PATHNAME = "/air/city";
const header1 = "We've Tested the Quality";
const header2 = "of Your City's Air.";

function AirHome() {
  const router = useRouter();
  const handleSearch = (city) => {
    router.push(`${CITY_PATHNAME}/${city.value}`);
  };

  return (
    <>
      <DocumentHead url={URLS.AIR.HOME} />
      <Navbar />
      <PageHeader
        handleSearch={handleSearch}
        header1={header1}
        header2={header2}
      />
      <Showcase />
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

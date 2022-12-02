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
const searchOptions = [
  { value: "nairobi", label: "Nairobi, Kenya" },
  { value: "kisumu", label: "Kisumu, Kenya" },
  { value: "nakuru", label: "Nakuru, Kenya" },
  { value: "lagos", label: "Lagos, Nigeria" },
  { value: "dar-es-salaam", label: "Dar-es-Salaam, Tanzania" },
];
const showcase = {
  title: "Showcase",
  headline:
    "Here are stories from all around the world on air quality and its effects",
  storiesLink:
    "https://docs.google.com/spreadsheets/d/1I2nTG_lst4nYrg8z1e7RaolC16A-M7f_lO_zRaV9L5s/pub?output=csv",
};

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
        searchOptions={searchOptions}
      />
      <Showcase {...showcase} />
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

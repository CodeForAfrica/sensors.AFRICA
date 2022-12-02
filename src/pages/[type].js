import PropTypes from "prop-types";
import React from "react";

import DocumentHead from "@/sensorsafrica/components/DocumentHead";
import { URLS } from "@/sensorsafrica/components/DocumentHead/PageHeads";
import Footer from "@/sensorsafrica/components/Footer";
import Hero from "@/sensorsafrica/components/Landing/Hero";

function SensorTypeHome({ type }) {
  return (
    <>
      <DocumentHead url={URLS[type].HOME} />
      <Hero comingSoon />
      <Footer />
    </>
  );
}

SensorTypeHome.propTypes = {
  type: PropTypes.oneOf(["RADIATION", "SOUND", "WATER"]).isRequired,
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { type: "radiation" } }, { params: { type: "sound" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params: { type } }) {
  return {
    props: { type: type.toUpperCase() },
  };
}

export default SensorTypeHome;

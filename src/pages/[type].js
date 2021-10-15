import React from 'react';
import PropTypes from 'prop-types';

import DocumentHead from 'components/DocumentHead';
import { URLS } from 'components/DocumentHead/PageHeads';
import Footer from 'components/Footer';
import Hero from 'components/Landing/Hero';

function SensorTypeHome({ type }) {
  return (
    <>
      <DocumentHead url={URLS[type].HOME} />
      <Hero />
      <Footer />
    </>
  );
}

SensorTypeHome.propTypes = {
  type: PropTypes.oneOf(['RADIATION', 'SOUND', 'WATER']).isRequired,
};

export async function getStaticProps({ params: { type } }) {
  return {
    props: { type: type.toUpperCase() },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'radiation' } },
      { params: { type: 'sound' } },
      { params: { type: 'water' } },
    ],
    fallback: false,
  };
}

export default SensorTypeHome;

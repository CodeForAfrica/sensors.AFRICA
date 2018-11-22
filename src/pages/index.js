import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/Landing/Hero';
import Footer from '../components/Footer';
import DocumentHead from '../components/DocumentHead';

function Home({ url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

Home.propTypes = {
  url: PropTypes.string
};

Home.defaultProps = {
  url: null
};

export default Home;

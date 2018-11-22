import React from 'react';
import PropTypes from 'prop-types';

import Hero from '../components/Landing/Hero';
import Footer from '../components/Footer';
import DocumentHead from '../components/DocumentHead';
import BlackFavicon from '../components/Favicons/BlackFavicon';

function Home({ url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <BlackFavicon />
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

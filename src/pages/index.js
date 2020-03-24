import React from 'react';

import DocumentHead from 'components/DocumentHead';
import { URLS } from 'components/DocumentHead/PageHeads';
import Footer from 'components/Footer';
import Hero from 'components/Landing/Hero';

function Home() {
  return (
    <>
      <DocumentHead url={URLS.HOME} />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;

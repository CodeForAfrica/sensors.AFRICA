import React from 'react';

import Hero from '../components/Landing/Hero';
import Footer from '../components/Footer';
import Seo from '../components/MetaTags/Seo';
import BlackFavicon from '../components/Favicons/BlackFavicon';

export default function Home() {
  return (
    <React.Fragment>
      <Seo url="landing" />
      <BlackFavicon />
      <Hero />
      <Footer />
    </React.Fragment>
  );
}

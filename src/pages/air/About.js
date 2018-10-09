import React from 'react';

import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import AboutHeader from '../../components/About/AboutHeader';
import Partners from '../../components/About/Partners';
import Staff from '../../components/About/Staff';
import Footer from '../../components/Footer';
import Support from '../../components/Support';

function About() {
  return (
    <React.Fragment>
      <Navbar />
      <AboutHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support />
      <Footer />
    </React.Fragment>
  );
}

export default About;

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import DocumentHead, { URLS } from 'components/DocumentHead';
import Stories from 'components/About/Stories';
import Navbar from 'components/Header/Navbar';
import AboutHeader from 'components/About/Header';
import AboutContent from 'components/About/AboutContent';
import Partners from 'components/About/Partners';
import Staff from 'components/About/Staff';
import Footer from 'components/Footer';
import Support from 'components/Support';
import PartnerLogos from 'components/PartnerLogos';

const useStyles = makeStyles((theme) => ({
  aboutSupport: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

function AboutGlobal() {
  const classes = useStyles();
  return (
    <>
      <DocumentHead url={URLS.AIR.ABOUT} />
      <Navbar />
      <AboutHeader />
      <AboutContent />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export default AboutGlobal;

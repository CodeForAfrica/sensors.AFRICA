import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import AboutContent from "@/sensorsafrica/components/About/AboutContent";
import AboutHeader from "@/sensorsafrica/components/About/Header";
import Partners from "@/sensorsafrica/components/About/Partners";
import Staff from "@/sensorsafrica/components/About/Staff";
import Stories from "@/sensorsafrica/components/About/Stories";
import DocumentHead, { URLS } from "@/sensorsafrica/components/DocumentHead";
import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import Support from "@/sensorsafrica/components/Support";

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
      <Support className={classes.aboutSupport} />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export default AboutGlobal;

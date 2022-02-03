import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import AboutHeader from "@/sensorsafrica/components/About/Air/Header";
import Partners from "@/sensorsafrica/components/About/Partners";
import Staff from "@/sensorsafrica/components/About/Staff";
import Stories from "@/sensorsafrica/components/About/Stories";
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

function About(props) {
  const classes = useStyles(props);

  return (
    <>
      <Navbar />
      <AboutHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export default About;

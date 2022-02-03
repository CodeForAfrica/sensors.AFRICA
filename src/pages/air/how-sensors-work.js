import { Grid } from "@material-ui/core";
import React from "react";

import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import HeaderIndex from "@/sensorsafrica/components/SensorsInfo/HardwareHeader";
import HardwareInfo from "@/sensorsafrica/components/SensorsInfo/HardwareInfo";

function HowSensorsWork() {
  return (
    <Grid>
      <Navbar />
      <HeaderIndex />
      <HardwareInfo />
      <PartnerLogos />
      <Footer />
    </Grid>
  );
}

export default HowSensorsWork;

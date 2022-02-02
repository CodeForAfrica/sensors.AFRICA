import { Grid } from "@material-ui/core";
import React from "react";

import Stories from "@/sensorsafrica/components/About/Stories";
import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import Header from "@/sensorsafrica/components/HealthClimate/HealthAndClimateHeader";
import Impact from "@/sensorsafrica/components/HealthClimate/HealthAndClimateImpact";
import HealthAndDiseaseBurden from "@/sensorsafrica/components/HealthClimate/HealthAndDiseaseBurden";
import Sources from "@/sensorsafrica/components/HealthClimate/Sources";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import Support from "@/sensorsafrica/components/Support";

function HealthAndClimateImpact() {
  return (
    <Grid>
      <Navbar />
      <Header />
      <HealthAndDiseaseBurden />
      <Sources />
      <Impact />
      <Stories />
      <Support />
      <PartnerLogos />
      <Footer />
    </Grid>
  );
}

export default HealthAndClimateImpact;

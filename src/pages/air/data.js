import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import Stories from "@/sensorsafrica/components/About/Stories";
import DataArchives from "@/sensorsafrica/components/DataArchives/DataArchives";
import DataArchivesHeader from "@/sensorsafrica/components/DataArchives/DataArchivesHeader";
import EmbedDocumentation from "@/sensorsafrica/components/EmbedDocumentation";
import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import Support from "@/sensorsafrica/components/Support";

const useStyles = makeStyles((theme) => ({
  dataSupport: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

function Data(props) {
  const classes = useStyles(props);

  return (
    <>
      <Navbar />
      <DataArchivesHeader />
      <DataArchives />
      <EmbedDocumentation />
      <Stories />
      <Support className={classes.dataSupport} />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export default Data;

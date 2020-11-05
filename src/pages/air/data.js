import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Stories from 'components/About/Stories';
import Navbar from 'components/Header/Navbar';
import DataArchivesHeader from 'components/DataArchives/DataArchivesHeader';
import DataArchives from 'components/DataArchives/DataArchives';
import EmbedDocumentation from 'components/EmbedDocumentation';
import Support from 'components/Support';
import PartnerLogos from 'components/PartnerLogos';
import Footer from 'components/Footer';

const useStyles = makeStyles((theme) => ({
  dataSupport: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

function Data() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <DataArchivesHeader />
      <DataArchives />
      <EmbedDocumentation />
      <Stories />
      <Support classNames={classes.dataSupport} />
      <PartnerLogos />
      <Footer />
    </>
  );
}

export default Data;

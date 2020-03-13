import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Stories from 'components/About/Stories';
import Navbar from 'components/Header/Navbar';
import DataArchivesHeader from 'components/DataArchives/DataArchivesHeader';
import DataArchives from 'components/DataArchives/DataArchives';
import EmbedDocumentation from 'components/EmbedDocumentation';
import Footer from 'components/Footer';
import Support from 'components/Support';

const useStyles = makeStyles(theme => ({
  dataSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
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
      <Footer />
    </>
  );
}

export default Data;

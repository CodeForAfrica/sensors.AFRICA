import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import DataArchivesHeader from '../../components/DataArchives/DataArchivesHeader';

import DataArchives from '../../components/DataArchives/DataArchives';
import Footer from '../../components/Footer';
import Support from '../../components/Support';

const styles = theme => ({
  dataSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function Data({ classes, url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <Navbar />
      <DataArchivesHeader />
      <DataArchives />
      <Stories />
      <Support classNames={classes.dataSupport} />
      <Footer />
    </React.Fragment>
  );
}

Data.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(Data);

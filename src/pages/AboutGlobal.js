import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../components/DocumentHead';
import Stories from '../components/About/Stories';
import Navbar from '../components/Header/Navbar';
import AboutGlobalHeader from '../components/About/AboutGlobalHeader';
import Partners from '../components/About/Partners';
import Staff from '../components/About/Staff';
import Footer from '../components/Footer';
import Support from '../components/Support';

const styles = theme => ({
  aboutSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function AboutGlobal({ classes, url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <Navbar />
      <AboutGlobalHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <Footer />
    </React.Fragment>
  );
}

AboutGlobal.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(AboutGlobal);

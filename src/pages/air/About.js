import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import AboutHeader from '../../components/About/Air/Header';

import Partners from '../../components/About/Partners';
import Staff from '../../components/About/Staff';
import Footer from '../../components/Footer';
import Support from '../../components/Support';
import PartnerLogos from '../../components/PartnerLogos';

const styles = theme => ({
  aboutSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function About({ classes, url }) {
  return (
    <React.Fragment>
      <DocumentHead url={url} />
      <Navbar />
      <AboutHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <PartnerLogos />
      <Footer />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(About);

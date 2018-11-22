import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import AboutHeader from '../../components/About/AboutHeader';
import Partners from '../../components/About/Partners';
import Staff from '../../components/About/Staff';
import Footer from '../../components/Footer';
import Support from '../../components/Support';
import GreenFavicon from '../../components/Favicons/GreenFavicon';

const styles = theme => ({
  aboutSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function About({ classes, url }) {
  return (
    <React.Fragment>
      <GreenFavicon />
      <DocumentHead url={url} />
      <Navbar />
      <AboutHeader />
      <Partners />
      <Staff />
      <Stories />
      <Support classNames={classes.aboutSupport} />
      <Footer />
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(About);

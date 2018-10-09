import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Stories from '../../components/About/Stories';
import Navbar from '../../components/Header/Navbar';
import AboutHeader from '../../components/About/AboutHeader';
import Partners from '../../components/About/Partners';
import Staff from '../../components/About/Staff';
import Footer from '../../components/Footer';
import Support from '../../components/Support';

const styles = theme => ({
  aboutSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5
  }
});

function About({ classes }) {
  return (
    <React.Fragment>
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);

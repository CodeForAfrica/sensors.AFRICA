import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import DocumentHead from '../../components/DocumentHead';
import Navbar from '../../components/Header/Navbar';
import JoinHeader from '../../components/JoinNetwork/JoinHeader';
import Support from '../../components/Support';
import Footer from '../../components/Footer';
import backgroundImage from '../../assets/images/background/bgsupport.jpg';
import PartnerLogos from '../../components/PartnerLogos';

const styles = theme => ({
  joinNetworkSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '40rem',
      alignItems: 'center'
    }
  }
});

function JoinNetwork({ classes, url }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <DocumentHead url={url} />
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <JoinHeader />
      </Grid>
      <Grid item xs={12}>
        <Support classNames={classes.joinNetworkSupport} />
      </Grid>
      <Grid item xs={12}>
        <PartnerLogos />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

JoinNetwork.propTypes = {
  classes: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired
};

export default withStyles(styles)(JoinNetwork);

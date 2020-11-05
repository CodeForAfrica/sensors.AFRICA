import React from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'components/Header/Navbar';
import JoinHeader from 'components/JoinNetwork/JoinHeader';
import Support from 'components/Support';
import Footer from 'components/Footer';
import PartnerLogos from 'components/PartnerLogos';
import backgroundImage from 'assets/images/background/bgsupport.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  joinNetworkSupport: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '40rem',
      alignItems: 'center',
    },
  },
  joinNetworkPartnerLogos: {
    // Due to the image used in support, no padding top for logos
    paddingTop: '3rem',
  },
}));

function JoinNetwork() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <JoinHeader />
      </Grid>
      <Grid item xs={12}>
        <Support classNames={classes.joinNetworkSupport} />
      </Grid>
      <Grid item xs={12} className={classes.joinNetworkPartnerLogos}>
        <PartnerLogos />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default JoinNetwork;

import React from 'react';

import { useRouter, withRouter } from 'next/router';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from 'components/Header/Navbar';
import PartnerLogos from 'components/PartnerLogos';
import Footer from 'components/Footer';
import CallToAction from 'components/City/CallToAction';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,

    // TODO(kilemensi): This is hack to force the page to be 100% wide w/o
    //                  horizontal scrollbars.
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff'
  }
});

function City() {
  const classes = useStyles();
  const router = useRouter();
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
        <CallToAction />
      </Grid>
      <Grid item xs={12}>
        This city is: {router.query.id}
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

export default withRouter(City);

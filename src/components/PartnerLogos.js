import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import worldbankgroup from '../assets/images/partners/worldbankgroup.png';
import liquidtelcom from '../assets/images/partners/liquidtelcom.png';
import data4sdg from '../assets/images/partners/partnershipsdg.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2rem',
    paddingBottom: '2rem',
    backgroundColor: 'white'
  },
  mainGrid: {
    margin: '1rem',
    width: 'auto'
  },
  img: {
    maxWidth: '100%',
    height: '100px',
    filter: 'grayscale(100%)'
  },
  titles: {
    fontWeight: 800,
    textTransform: 'uppercase'
  },
  partnerinfo: {
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('lg')]: {
      paddingRight: '1.5rem'
    }
  },
  partnerGrid: {
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '1rem',
      textAlign: 'center'
    }
  }
});

function PartnerLogos({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={40}
        className={classes.mainGrid}
      >
        <Grid
          container
          spacing={40}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.partnerGrid}
        >
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <img
              src={worldbankgroup}
              alt="World Bank Group"
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <img
              src={liquidtelcom}
              alt="Liquid Telcom"
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <img
              src={data4sdg}
              alt="World Bank Group"
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

PartnerLogos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PartnerLogos);

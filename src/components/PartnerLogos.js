import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import worldbank from '../assets/images/partners/worldbankgroup.png';

import liquidtelcom from '../assets/images/partners/liquidtelcom.png';
import data4sdg from '../assets/images/partners/partnershipsdg.png';
import germanCoopLogo from '../assets/images/partners/germanCoopLogo.bmp';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white
  },
  title: {
    backgroundColor: 'white',
    paddingTop: '5rem',
    paddingBottom: '5rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '3rem'
    }
  },

  worldBankLogo: {
    width: '100%',
    textAlign: 'center',
    padding: '2rem 0',
    [theme.breakpoints.up('md')]: {
      padding: 0,
      width: '18.75rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    }
  },
  liquidLogo: {
    width: '100%',
    textAlign: 'center',
    padding: '2rem 0',
    [theme.breakpoints.up('md')]: {
      padding: 0,
      width: '18.75rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginLeft: '0.5625rem',
      marginRight: '0.5625rem'
    }
  },
  globalLogo: {
    width: '100%',
    textAlign: 'center',
    paddingBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingBottom: 0,
      width: '18.75rem',
      marginLeft: '1.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginLeft: '1.125rem'
    }
  },
  germanCoopLogo: {
    width: '100%',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: '3rem',
      width: '18.75rem',
      marginRight: '1.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginRight: '1.125rem'
    }
  },
  img: {
    maxWidth: '100%',
    height: '100px',
    filter: 'grayscale(100%)'
  }
});

function PartnerLogos({ classes }) {
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h3">OUR PARTNERS</Typography>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item sm={6} md={3}>
          <div className={classes.worldBankLogo}>
            <img src={worldbank} alt="World Bank" className={classes.img} />
          </div>
        </Grid>
        <Grid item sm={6} md={3}>
          <div className={classes.liquidLogo}>
            <img
              src={liquidtelcom}
              alt="Liquid Telcom"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item sm={6} md={3}>
          <div className={classes.globalLogo}>
            <img
              src={data4sdg}
              alt="Global Partnership for Sustainable Development Data"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item sm={6} md={3}>
          <div className={classes.germanCoopLogo}>
            <img
              src={germanCoopLogo}
              alt="German Cooperation"
              className={classes.img}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

PartnerLogos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PartnerLogos);

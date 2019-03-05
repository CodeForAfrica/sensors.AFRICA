import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import worldbank from '../assets/images/partners/worldbankgroup.png';

import liquidtelcom from '../assets/images/partners/liquidtelcom.png';
import data4sdg from '../assets/images/partners/partnershipsdg.png';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    backgroundColor: 'white',
    paddingBottom: '3rem',
    [theme.breakpoints.down('md')]: {
      paddingTop: '3rem'
    }
  },
  partnerContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    paddingBottom: '3rem',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem'
    }
  },
  leftLogo: {
    width: '100vw',
    textAlign: 'center',
    paddingTop: '2rem',
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      width: '18.75rem',
      marginRight: '1.125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '25.375rem',
      marginRight: '1.125rem'
    }
  },
  centerLogo: {
    width: '100vw',
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
  rightLogo: {
    width: '100vw',
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
  img: {
    maxWidth: '100%',
    height: '100px',
    filter: 'grayscale(100%)'
  }
});

function PartnerLogos({ classes }) {
  return (
    <Grid container xs={12}>
      <Grid
        container
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h5">OUT PARTNERS</Typography>
      </Grid>

      <Grid
        container
        justify="center"
        align="center"
        className={classes.partnerContainer}
      >
        <Grid item>
          <div className={classes.centerLogo}>
            <img src={worldbank} alt="World Bank" className={classes.img} />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.centerLogo}>
            <img
              src={liquidtelcom}
              alt="Liquid Telcom"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.rightLogo}>
            <img
              src={data4sdg}
              alt="Global Partnership for Sustainable Development Data"
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

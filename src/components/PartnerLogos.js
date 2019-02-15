import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import worldbankgroup from '../assets/images/partners/worldbankgroup.png';
import liquidtelcom from '../assets/images/partners/liquidtelcom.png';
import codeforafrica from '../assets/images/partners/codeforafrica.png';
import innovateafrica from '../assets/images/partners/innovateafrica.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '3rem',
    paddingBottom: '3rem',
    backgroundColor: 'white'
  },
  mainGrid: {
    margin: '2rem',
    width: 'auto'
  },
  img: {
    maxWidth: '100%',
    height: '100px'
  },
  titles: {
    fontWeight: 800,
    textTransform: 'none'
  },
  partnerinfo: {
    color: theme.palette.secondary.main
  },
  partnerGrid: {
    paddingTop: 0,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '2rem',
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
        <Grid item xs={8} sm={8} md={4}>
          <Typography variant="h6" className={classes.titles}>
            Our Partners
          </Typography>
          <Typography variant="caption" className={classes.partnerinfo}>
            Lorem ipsum dolor sit amet, iudicabit voluptaria ei vis. Eu alia
            debet option vis, vis probo voluptatum no, mazim facete interesset
            ex qui.
          </Typography>
        </Grid>
        <Grid
          container
          xs={8}
          spacing={24}
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
              src={codeforafrica}
              alt="Liquid Telcom"
              className={classes.img}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={3}>
            <img
              src={innovateafrica}
              alt="Liquid Telcom"
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

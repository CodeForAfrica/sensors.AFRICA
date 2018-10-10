import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import business from '../../assets/images/logos/business.png';
import premium from '../../assets/images/logos/premium.png';
import guardian from '../../assets/images/logos/guardian.png';
import nation from '../../assets/images/logos/nation.png';
import star from '../../assets/images/logos/star.jpg';
import womanng from '../../assets/images/logos/womanng.png';
import dailynation from '../../assets/images/logos/dailynation.png';
import cable from '../../assets/images/logos/cable.png';
import code from '../../assets/images/logos/cfafrica_gray.png';
import innovate from '../../assets/images/logos/innovateafrica_gray.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  typography: {
    paddingTop: '5rem',
    textAlign: 'center',
    textTransform: 'Uppercase'
  },
  imgContainer: {
    textAlign: 'center'
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  },
  partnersContainer: {
    paddingTop: '1rem',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 0
    }
  }
});

function Partners({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="subheading" className={classes.typography}>
          Media partners
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img
            src={business}
            alt="Business Daily Logo"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={premium} alt="Premium Times Logo" className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={guardian} alt="The guardian Logo" className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={nation} alt="The nation Logo" className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={star} alt="The Star Logo" className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={womanng} alt="Woman NG Logo" className={classes.img} />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img
            src={dailynation}
            alt="Daily Nation Logo"
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3} className={classes.imgContainer}>
          <img src={cable} alt="The Cable Logo" className={classes.img} />
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <Grid item xs={12}>
          <Typography variant="subheading" className={classes.typography}>
            In partnership with
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          container
          className={classes.partnersContainer}
          justify="center"
          alignItems="center"
        >
          <Grid item className={classes.imgContainer}>
            <img src={code} alt="Code for Africa" className={classes.img} />
          </Grid>
          <Grid item className={classes.imgContainer}>
            <img src={innovate} alt="innovateAFRICA" className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Partners);

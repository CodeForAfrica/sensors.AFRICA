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
    flexGrow: 1,
    backgroundColor: 'white'
  },
  typography: {
    paddingTop: theme.spacing.unit * 6,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  mainGrid: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '8rem',
      paddingRight: '8rem'
    }
  },
  imgContainer: {
    textAlign: 'center'
  },
  mediaImg: {
    maxWidth: '100%',
    height: 'auto',
    maxHeight: 100
  },
  img: {
    maxWidth: '100%',
    height: 50,
    padding: '0 8px',
    [theme.breakpoints.up('sm')]: {
      height: 60
    },
    [theme.breakpoints.up('md')]: {
      height: 70
    }
  },
  partnersContainer: {
    margin: theme.spacing.unit * 6,
    textAlign: 'center',
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
        <Typography variant="h6" className={classes.typography}>
          Media partners
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img
            src={business}
            alt="Business Daily"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={6} sm={3} className={classes.imgContainer}>
          <img src={premium} alt="Premium Times" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img src={guardian} alt="The Guardian" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img src={nation} alt="The Nation" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img src={star} alt="The Star" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img src={womanng} alt="Woman NG" className={classes.mediaImg} />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img
            src={dailynation}
            alt="Daily Nation"
            className={classes.mediaImg}
          />
        </Grid>
        <Grid item xs={6} md={3} className={classes.imgContainer}>
          <img src={cable} alt="The Cable" className={classes.mediaImg} />
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
          <Typography variant="h6" className={classes.typography}>
            In partnership with
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.partnersContainer}>
          <a
            href="https://codeforafrica.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={code} alt="Code for Africa" className={classes.img} />
          </a>
          <a
            href="https://innovateafrica.fund/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={innovate} alt="innovateAFRICA" className={classes.img} />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Partners);

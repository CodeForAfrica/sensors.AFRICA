import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import HealthImpact from '../../assets/images/healthimpacticon.png';
import ClimateImpact from '../../assets/images/climateimpacticon.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '3rem',
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem'
    }
  },
  indoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '25.125rem',
      marginRight: '4.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '36.75rem',
      marginRight: '1.875rem',
      padding: '3rem'
    }
  },
  outdoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.light,
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '25.125rem',
      marginLeft: '4.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '36.75rem',
      marginLeft: '1.875rem',
      padding: '3rem'
    }
  },
  title: {
    color: 'white',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '1.5rem',
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight
    }
  },
  caption: {
    color: '#F3F3F3',
    paddingBottom: '1rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      paddingTop: '2rem'
    }
  },
  cardContent: {
    color: 'white',
    textAlign: 'center'
  },
  img: {
    height: '5rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  }
});

function HealthClimateCards({ classes }) {
  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        spacing={24}
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Card className={classes.indoor}>
            <CardContent className={classes.cardContent}>
              <img src={HealthImpact} alt="Housing" className={classes.img} />
              <Typography variant="h5" className={classes.title}>
                Health impact
              </Typography>
              <Typography variant="subtitle2" className={classes.caption}>
                Tiny, invisible particles of pollution penetrate deep into our
                lungs, bloodstream and bodies. These pollutants are responsible
                for about one third of deaths from strokes, chronic respiratory
                diseases and lung canceras well as one quater of deaths from
                heart attacks. Ground Level ozone that produced from the
                interaction of many different pollutants in sunlight is also a
                cause of asthma and chronic respiratory diseses.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Card className={classes.outdoor}>
            <CardContent className={classes.cardContent}>
              <img src={ClimateImpact} alt="Housing" className={classes.img} />
              <Typography variant="h5" className={classes.title}>
                Climate Impact
              </Typography>
              <Typography variant="subtitle2" className={classes.caption}>
                Short-lived pollutants(SLCPs) are among those pollutants most
                linked with both health effects and near-term warming of the
                planet. They persist in the atmosphere for as little as a few
                days or up to a few days or up to a few decades, so reducing
                them can have an almost immediate health and climate benefits
                for living in places where levels fall.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

HealthClimateCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthClimateCards);

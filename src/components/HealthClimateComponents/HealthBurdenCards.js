import React from 'react';
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import risingtemperature from '../../assets/images/icons/Risingtemperature.png';
import snowmelt from '../../assets/images/icons/snowmelt.png';
import cropdamage from '../../assets/images/icons/cropdamage.png';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    paddingBottom: '3rem'
  },
  mainGrid: { marginLeft: '15%', marginRight: '15%' },
  title: {
    textAlign: 'center',
    textTransform: 'none'
  },
  firstLastCard: {
    height: '25rem',
    width: '20rem',
    backgroundColor: theme.palette.primary.light
  },
  middleCard: {
    height: '25rem',
    width: '20rem',
    backgroundColor: theme.palette.primary.dark
  },
  img: {
    height: '5rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  },
  cardGrid: {
    height: '32rem'
  },
  cardTitle: {
    color: 'white'
  },
  bodycopy: {
    color: 'white',
    textAlign: 'center'
  },
  cardTop: {
    textAlign: 'center',
    paddingBottom: '1rem'
  }
});
function HealthBurdenCards({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid
        item
        xs={12}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Typography variant="h5" className={classes.title}>
          Many sources of air pollution also are heavy emitters of C02,
          contributing to a vicious cycle that threatens out health and climate.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        container
        spacing={24}
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.cardGrid}
      >
        <Card className={classes.firstLastCard}>
          <CardContent>
            <Grid className={classes.cardTop}>
              <img
                src={risingtemperature}
                alt="Rising Temperature"
                className={classes.img}
              />
              <Typography variant="h5" className={classes.cardTitle}>
                Rising Temperature
              </Typography>
            </Grid>
            <Typography variant="body2" className={classes.bodycopy}>
              Global warming increses the intensity of storms,droughts and heat
              waves,and expands the zones of transmission for many vector-bourne
              diseases transmitted by mosquitoes(e.g malaria) or other insects
              and pests.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.middleCard}>
          <CardContent>
            <Grid className={classes.cardTop}>
              <img
                src={snowmelt}
                alt="Snow and Ice melt"
                className={classes.img}
              />
              <Typography variant="h5" className={classes.cardTitle}>
                Snow and ice melt
              </Typography>
            </Grid>
            <Typography variant="body2" className={classes.bodycopy}>
              Black carbon speeds up glacier and mountain snow and ice melt
              leading to loss of water storage in these "ice reservoirs"
              increased drought and exacerbating lcal weather extremes.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.firstLastCard}>
          <CardContent>
            <Grid className={classes.cardTop}>
              <img src={cropdamage} alt="Crop Damage" className={classes.img} />
              <Typography variant="h5" className={classes.cardTitle}>
                Crop Damage
              </Typography>
            </Grid>
            <Typography variant="body2" className={classes.bodycopy}>
              Ozone reduces crop growth and agricultural productivity ,which in
              turn reduces food security and leads to undernutrition.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
HealthBurdenCards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HealthBurdenCards);

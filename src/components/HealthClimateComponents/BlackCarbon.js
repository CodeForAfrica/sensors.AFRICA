import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  mainTitle: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontWeight: 'bolder',
    textDecoration: 'Upppercase',
    fontSize: '14px'
  },
  textGrid: { paddingBottom: '3rem' },
  bodyCopy: { textAlign: 'center' }
});

function BlackCarbonComponent({ classes }) {
  return (
    <Grid item xs={3} direction="columnn" alignItems="center" justify="center">
      <Grid style={{ padding: '1.5rem' }}>
        <Typography variant="h6" className={classes.mainTitle}>
          Black Carbon
        </Typography>
      </Grid>

      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Sources:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Produced most often by diesel engines,burning trash,and cooking or
          heating stoves that burn coal, kerosine or biomass(organic matter such
          as wood or animal waste).
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '2rem' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Impact:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Black carbon particles are fine enough to penetrate deep into the
          lungs ,bloodstream, heart and brain causing inflamatory responses and
          other long term health effects
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '2rem' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Reduction:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Fortunately its life span is only up to ten days, so if emmison of
          black carbon and other short lived climates polutants were
          dramatically reduced in the next few years, global warming by 2050
          would slow by as much as 5c
        </Typography>
      </Grid>
    </Grid>
  );
}

BlackCarbonComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BlackCarbonComponent);

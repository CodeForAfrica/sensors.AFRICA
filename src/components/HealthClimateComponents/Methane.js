import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    backgroundColor: '#F3F3F3',
    height: '45rem'
  },
  mainTitle: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontWeight: 'bolder',
    textDecoration: 'Upppercase',
    fontSize: theme.typography.fontSize
  },
  bodyCopy: { textAlign: 'center', marginRight: '0.5rem', marginLeft: '0.5rem' }
});

function MethaneComponent({ classes }) {
  return (
    <Grid
      item
      xs={3}
      direction="columnn"
      alignItems="center"
      className={classes.grid}
    >
      <Grid style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <Typography variant="h6" className={classes.mainTitle}>
          Methane
        </Typography>
      </Grid>

      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Sources:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          40 %of generated methane emissons come from agriculture,primary rice,
          paddies and livestock production.This is followed by emissions from
          sewage and solid waste and oil and gas production.
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1rem' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Impact:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Methane emissions contribute significantly to the development of
          ground level ozone;chronic exposure to ozone is a factor of asthma and
          other chronic respiratory illness and can harm childhood lung
          development
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1rem' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Reduction:
        </Typography>
      </Grid>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Methane persist for a decade,but improved waste management methods,
          including capture and combustion of methane as a clean energy
          source,would rapidily begin depleting emissions
        </Typography>
      </Grid>
    </Grid>
  );
}

MethaneComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MethaneComponent);

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    backgroundColor: '#F3F3F3',
    height: 'auto'
  },
  mainTitle: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontWeight: 'bolder',
    fontSize: theme.typography.fontSize
  },
  textGrid: { paddingBottom: '3rem' },
  bodyCopy: { textAlign: 'center', marginRight: '0.5rem', marginLeft: '0.5rem' }
});

function GroundLevelComponent({ classes }) {
  return (
    <Grid
      item
      lg={3}
      md={3}
      xs={8}
      direction="columnn"
      alignItems="center"
      justify="center"
      className={classes.grid}
    >
      <Grid style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <Typography variant="h6" className={classes.mainTitle}>
          Ground Level Ozone
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ textAlign: 'center' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Sources:
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          Forms when emissions of methane,nitogen oxides and other 'precursor'
          pollutants from industry, traffic, waste and energy production
          interact with the presence of sunlight.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1.5rem', textAlign: 'center' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Impact:
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          A major factor in respiratory illness has been shown to decrease crop
          yields,spurring food security challenges and security.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1.5rem', textAlign: 'center' }}
      >
        <Typography variant="body2" style={{ fontWeight: 'bold' }}>
          Reduction:
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        justify="center"
        alignItems="center"
        style={{ paddingBottom: '5rem' }}
      >
        <Typography variant="body2" className={classes.bodyCopy}>
          Forms when emissions of methane,nitogen oxides and other 'precursor'
          pollutants from industry, traffic, waste and energy production
          interact with the presence of sunlight.
        </Typography>
      </Grid>
    </Grid>
  );
}

GroundLevelComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroundLevelComponent);

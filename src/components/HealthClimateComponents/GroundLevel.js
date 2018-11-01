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
  caption: {},
  bodyCopy: { textAlign: 'center' }
});
class GroundLevelComponent extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Grid
        item
        xs={3}
        direction="columnn"
        alignItems="center"
        justify="center"
        style={{ backgroundColor: '#F3F3F3' }}
      >
        <Grid style={{ padding: '1.5rem' }}>
          <Typography variant="h6" className={classes.mainTitle}>
            Ground Level Ozone
          </Typography>
        </Grid>

        <Grid container item xs={12} justify="center" alignItems="center">
          <Typography variant="body2" style={{ fontWeight: 'bold' }}>
            Sources:
          </Typography>
        </Grid>
        <Grid container item xs={12} justify="center" alignItems="center">
          <Typography variant="body2" className={classes.bodyCopy}>
            Forms when emissions of methane,nitogen oxides and other 'precursor'
            pollutants from industry, traffic, waste and energy production
            interact with the presence of sunlight.
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
            A major factor in respiratory illness has been shown to decrease
            crop yields,spurring food security challenges and security.
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
            Forms when emissions of methane,nitogen oxides and other 'precursor'
            pollutants from industry, traffic, waste and energy production
            interact with the presence of sunlight.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

GroundLevelComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GroundLevelComponent);

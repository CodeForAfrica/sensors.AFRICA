import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SensorsLogo from './sensorsLogo';

const styles = theme => ({
  root: {
    height: '100%',
    padding: 0
  },
  gridBody: {},
  bodyCopy: {
    paddingTop: 0
  }
});

function Intro({ classes }) {
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={12} direction="row" justify="center" alignItems="center">
        <SensorsLogo />
        <div
          container
          item
          xs={8}
          direction="row"
          justify="center"
          alignItems="center"
          style={{
            paddingRight: '25%',
            paddingLeft: '25%',
            paddingBottom: '4rem'
          }}
        >
          <Typography
            variant="body1"
            style={{ textAlign: 'center', margin: '1rem' }}
          >
            The sensors.AFRICA brand is unfussy, approachable and simple with a
            strong color scheme. It makes use of a strong icon to communicate
            the idea of information/data being detected, measured and recorded.
          </Typography>
          <Typography
            variant="body1"
            style={{ textAlign: 'center', margin: '1rem' }}
          >
            The sensors.ARICA aesthetic feels activist yet mature. It always
            aims to display information in a way that the ordinary citizen will
            find easy-to-understand and engage with.
          </Typography>

          <Typography variant="body1" style={{ textAlign: 'center' }}>
            There are currently three colorways that explore the various sensors
            programs: Green (Air), Blue (Water), Purple (Sound).
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);

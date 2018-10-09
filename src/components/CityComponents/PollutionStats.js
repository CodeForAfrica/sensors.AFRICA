import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    height: '400px'
  },
  centerGrid: {
    borderRight: '1px solid  rgba(0, 0, 0, 0.2)',
    borderLeft: '1px solid  rgba(0, 0, 0, 0.2)',
    height: '250px',
    paddingTop: '2rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    textAlign: 'center'
  },
  innnergrid: {
    margin: '5rem',
    borderTop: '1px solid  rgba(0, 0, 0, 0.2)'
  },
  maingrid: {
    margin: '3rem',
    paddingTop: '4rem'
  },
  grid: {
    height: '250px',
    textAlign: 'center',
    paddingRight: '2rem',
    paddingLeft: '2rem',
    paddingTop: '2rem'
  },
  highlight: {
    color: '#2FB56B',
    fontWeight: '500'
  }
};

function PollutionStats({ classes }) {
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid container className={classes.innnergrid}>
        <Grid
          container
          item
          xs={12}
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.maingrid}
        >
          <Grid container item xs={4} className={classes.grid}>
            <div>
              <Typography variant="subheading">
                Death by air pollution in kenya yearly
              </Typography>
              <Typography variant="display2" className={classes.highlight}>
                5,102
              </Typography>
            </div>

            <div>
              <Typography variant="subheading">
                Child Deaths caused by air pollution in kenya yearly
              </Typography>
              <Typography variant="display2" className={classes.highlight}>
                2,144
              </Typography>
            </div>
          </Grid>

          <Grid container item xs={4} className={classes.centerGrid}>
            <div>
              <Typography
                variant="subheading"
                style={{ paddingBottom: '1rem' }}
              >
                The top illness caused by air pollution in kenya is
              </Typography>
              <Typography variant="display1" className={classes.highlight}>
                ACUTE LOWER RESPIRATORY INFECTION
              </Typography>
            </div>
          </Grid>

          <Grid container item xs={4} className={classes.grid}>
            <div style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
              <Typography variant="subheading">
                <b>POLLUTION LEVELS IN NAIROBI</b>
              </Typography>
              <Typography
                variant="subheading"
                style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
              >
                The air in Nairobi has an annual average of
              </Typography>
              <Typography
                variant="display1"
                className={classes.highlight}
                style={{ paddingBottom: '1rem' }}
              >
                17 ug/m3
              </Typography>
              <Typography variant="subheading">
                of PM2.5 particles. That is 70% more than the WHO safe level.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

PollutionStats.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(PollutionStats);

import React from 'react';
import PropTypes from 'prop-types';

import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    backgroundColor: theme.palette.primary.dark,
    color: '#fff',
    height: 50,
    width: 100,
    borderRadius: 0
  },
  container: {
    textAlign: 'center',
    paddingTop: '0.4rem'
  },
  buttonConnectText: {
    margin: '2rem'
  },
  display2: {
    color: theme.palette.primary.light
  },
  caption: {
    textAlign: 'center'
  },
  small: {
    fontSize: '1.5rem'
  }
});

function StatsSummary({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        container
        justify="center"
        alignItems="center"
        style={{ paddingTop: '2rem' }}
      >
        <Button variant="contained" className={classes.button}>
          03 Jan
        </Button>
        <p className={classes.buttonConnectText}>to</p>
        <Button variant="contained" className={classes.button}>
          07 Jan
        </Button>
      </Grid>

      <Grid item xs={12} container className={classes.container}>
        <Typography
          variant="h6"
          style={{ margin: '1em auto', fontSize: '16px', fontWeight: 'bold' }}
        >
          SUB HEADING
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ margin: '1rem' }}
        >
          <Typography variant="h3" className={classes.display2}>
            1,234
            <sup className={classes.small}>Unit/H</sup>
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.caption}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus
          dui nec ligula semper eleifend. Quisque rhoncus tortor
        </Typography>
      </Grid>
    </Grid>
  );
}

StatsSummary.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(StatsSummary);
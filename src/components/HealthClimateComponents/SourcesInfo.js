import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GroundLevel from './GroundLevel';
import BlackCarbon from './BlackCarbon';
import Methane from './Methane';

const styles = theme => ({
  root: {
    backgroundColor: 'white',
    height: '130vh'
  },
  grid: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 'bolder',
    textDecoration: 'Upppercase',
    fontSize: theme.typography.fontSmallDefault.fontSize
  },
  mainGrid: { height: '50rem' }
});
function SourcesInfo({ classes }) {
  return (
    <Grid className={classes.root}>
      <Grid
        item
        lg={12}
        xs={12}
        md={12}
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        <Typography
          variant="h6"
          alignItems="center"
          className={classes.mainTitle}
        >
          Sources of Pollution
        </Typography>
      </Grid>

      <Grid
        item
        lg={12}
        xs={12}
        md={12}
        spacing={24}
        container
        direction="row"
        alignItems="center"
        justify="center"
        style={{ paddingTop: '2rem', paddingBottom: '2rem', height: '50rem' }}
      >
        <GroundLevel />
        <BlackCarbon />
        <Methane />
      </Grid>
    </Grid>
  );
}

SourcesInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SourcesInfo);

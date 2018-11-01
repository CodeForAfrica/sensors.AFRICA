import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GroundLevel from './GroundLevel';
import BlackCarbon from './BlackCarbon';
import Methane from './Methane';

const styles = theme => ({
  root: {
    backgroundColor: 'white'
  },
  grid: {
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },

  mainTitle: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontWeight: 'bolder',
    textDecoration: 'Upppercase',
    fontSize: '14px'
  },
  mainGrid: { height: '50rem' }
});
class SourcesInfo extends React.Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.root}>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <Typography variant="h6" alignItems="center">
            Sources of Polution
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          spacing={24}
          container
          direction="row"
          alignItems="center"
          justify="center"
          className={classes.mainGrid}
        >
          <GroundLevel />
          <BlackCarbon />
          <Methane />
        </Grid>
      </Grid>
    );
  }
}

SourcesInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SourcesInfo);

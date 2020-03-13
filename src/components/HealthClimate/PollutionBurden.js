import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: 1,
    padding: '2rem',
    textAlign: 'center'
  },
  img: {
    height: '5rem',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      height: '100%'
    }
  },
  mainTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: theme.typography.h6.fontSize
  },
  body: {
    paddingTop: '1.5rem'
  },
  bodyCopy: {
    color: '#fff',
    textAlign: 'center'
  }
});

function PollutionBurden({ classes, icon, title, burden }) {
  return (
    <Grid
      direction="row"
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <img src={icon} alt={title} className={classes.img} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.mainTitle}>
          {title}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        className={classes.body}
        justify="center"
        alignItems="center"
      >
        <Typography variant="body2" className={classes.bodyCopy}>
          {burden}
        </Typography>
      </Grid>
    </Grid>
  );
}

PollutionBurden.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  burden: PropTypes.string.isRequired
};

export default withStyles(styles)(PollutionBurden);

import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flex: 1,
    padding: '2rem'
  },
  mainTitle: {
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontSize: theme.typography.h6.fontSize
  },
  subTitle: {
    textAlign: 'center',
    fontWeight: 600
  },
  body: {
    paddingTop: '1.5rem'
  },
  bodyCopy: {
    textAlign: 'center'
  }
});

function PollutionSource({
  classes,
  title,
  sources,
  impact,
  reduction,
  backgroundColor
}) {
  return (
    <Grid
      direction="row"
      className={classes.root}
      justify="center"
      alignItems="center"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.mainTitle}>
          {title}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.body}>
        <Typography variant="body1" className={classes.subTitle}>
          Sources:
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          {sources}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.body}>
        <Typography variant="body1" className={classes.subTitle}>
          Impact:
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          {impact}
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.body}>
        <Typography variant="body1" className={classes.subTitle}>
          Reduction:
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          {reduction}
        </Typography>
      </Grid>
    </Grid>
  );
}

PollutionSource.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  sources: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
  reduction: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
};

PollutionSource.defaultProps = {
  backgroundColor: '#F3F3F3'
};

export default withStyles(styles)(PollutionSource);

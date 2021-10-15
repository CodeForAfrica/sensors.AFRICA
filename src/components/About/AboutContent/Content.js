import React from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: '2rem',
  },
  mainTitle: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
    fontSize: theme.typography.h6.fontSize,
    paddingBottom: theme.typography.h6.fontSize,
  },
  subTitle: {
    textAlign: 'center',
    fontWeight: 600,
  },
  body: {
    paddingTop: '1.5rem',
  },
  bodyCopy: {
    textAlign: 'left',
  },
}));

function Content({ title, description, backgroundColor }) {
  const classes = useStyles();
  return (
    <Grid
      direction="row"
      className={classes.root}
      justify="center"
      alignItems="center"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" className={classes.mainTitle}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} justify="center" alignItems="center">
        <Typography variant="body2" className={classes.bodyCopy}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Content.defaultProps = {
  backgroundColor: '#F3F3F3',
};

export default Content;

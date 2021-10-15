import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AirHeaderContent from 'components/Header/JumboContent/AirHeaderContent';

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450,
    },
  },
}));

function AirHeader({ handleSearch }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <AirHeaderContent handleSearch={handleSearch} />
      </Grid>
    </Grid>
  );
}

AirHeader.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default AirHeader;

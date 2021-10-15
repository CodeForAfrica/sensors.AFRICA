import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

import SearchBar from 'components/SearchBar';

function CityMenuBar({ handleSearch }) {
  return (
    <Grid container xs={3}>
      <SearchBar
        placeholder="Search for another location ..."
        handleSearch={handleSearch}
      />
    </Grid>
  );
}

CityMenuBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default CityMenuBar;

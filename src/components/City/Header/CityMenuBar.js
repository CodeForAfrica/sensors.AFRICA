import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../SearchBar';

function CityMenuBar({ handleSearch }) {
  return (
    <SearchBar
      placeholder="Search for another location ..."
      handleSearch={handleSearch}
    />
  );
}

CityMenuBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default CityMenuBar;

import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from '../../SearchBar';
import MenuBar from '../../Header/MenuBar';

function CityMenuBar({ handleSearch }) {
  return (
    <MenuBar>
      <SearchBar
        placeholder="Search for another location ..."
        handleSearch={handleSearch}
      />
    </MenuBar>
  );
}

CityMenuBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default CityMenuBar;

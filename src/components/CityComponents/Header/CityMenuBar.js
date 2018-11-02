import React from 'react';
import PropTypes from 'prop-types';

import MenuBar from '../../Header/MenuBar';
import SearchBar from '../../SearchBar';

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

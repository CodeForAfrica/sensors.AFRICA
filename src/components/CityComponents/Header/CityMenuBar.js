import React from 'react';
import PropTypes from 'prop-types';

import MenuBar from '../../Header/MenuBar';
import SearchBar from '../../SearchBar';

function CityMenuBar({ handleChange }) {
  return (
    <MenuBar>
      <SearchBar
        placeholder="Search for another location ..."
        handleChange={handleChange}
      />
    </MenuBar>
  );
}

CityMenuBar.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default CityMenuBar;

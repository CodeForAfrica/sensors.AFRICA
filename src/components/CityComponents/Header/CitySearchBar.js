import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SearchBar from '../../SearchBar';

const styles = theme => ({
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    width: 300,
    background: theme.palette.background.paper
  },
  css1wy0on6: {
    width: '0'
  }
});

function CitySearchBar({ handleChange, placeholder }) {
  return <SearchBar placeholder={placeholder} handleChange={handleChange} />;
}

CitySearchBar.propTypes = {
  handleChange: PropTypes.func,
  placeholder: PropTypes.string
};

CitySearchBar.defaultProps = {
  handleChange: null,
  placeholder: ''
};

export default withStyles(styles)(CitySearchBar);

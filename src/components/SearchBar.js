import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import { MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2.5rem'
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: theme.spacing.unit * 2,
    width: 300
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
    color: '#164B3E',
    paddingLeft: '1rem'
  },
  paper: {
    position: 'absolute',
    zIndex: 2,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    background: theme.palette.primary.main
  }
});

function NoOptionsMessage({ children, innerProps, selectProps }) {
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}
NoOptionsMessage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}
inputComponent.propTypes = {
  inputRef: PropTypes.node.isRequired,
  props: PropTypes.shape({}).isRequired
};

function Control({ children, innerProps, innerRef, selectProps }) {
  return (
    <TextField
      InputProps={{
        inputComponent,
        inputProps: {
          className: selectProps.classes.input,
          inputRef: innerRef,
          children,
          ...innerProps
        }
      }}
      {...selectProps.textFieldProps}
    />
  );
}
Control.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  innerRef: PropTypes.node.isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

function Option({ children, innerProps, innerRef, isFocused, isSelected }) {
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        color: '#fff',
        fontWeight: isSelected ? 500 : 400
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}
Option.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  innerRef: PropTypes.node.isRequired,
  isFocused: PropTypes.bool.isRequired,
  isSelected: PropTypes.bool.isRequired
};

function Placeholder({ children, innerProps, selectProps }) {
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}
Placeholder.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

function SingleValue({ children, innerProps, selectProps }) {
  return (
    <Typography className={selectProps.classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  );
}
SingleValue.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

function ValueContainer({ children, selectProps }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

ValueContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

function Menu({ children, innerProps, selectProps }) {
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}
Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  innerProps: PropTypes.shape({}).isRequired,
  selectProps: PropTypes.shape({}).isRequired
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator: null
};

const DEFAULT_OPTIONS = [
  { value: 'nairobi', label: 'Nairobi, Kenya' },
  { value: 'lagos', label: 'Lagos, Nigeria' },
  { value: 'dar-es-salaam', label: 'Dar-es-Salaam, Tanzania' }
];

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { single: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(city) {
    this.setState({ single: city });
    const { handleSearch } = this.props;
    if (handleSearch) {
      handleSearch(city);
    }
  }

  render() {
    const { classes, options, placeholder } = this.props;
    const { single } = this.state;

    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          options={options}
          components={components}
          value={single}
          onChange={this.handleChange}
          placeholder={placeholder}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSearch: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  handleSearch: null,
  options: DEFAULT_OPTIONS,
  placeholder: ''
};

export default withStyles(styles)(SearchBar);

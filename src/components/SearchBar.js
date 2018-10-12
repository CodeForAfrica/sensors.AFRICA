import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import { MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { relative } from 'path';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    paddingTop: '2.5rem',
    position: relative
  },
  input: {
    display: 'flex',
    padding: 0
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
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
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
    background: 'none'
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

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

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

function SingleValue({ children, innerProps, selectProps }) {
  return (
    <Typography className={selectProps.classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  );
}

function ValueContainer({ children, selectProps }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

function Menu({ children, innerProps, selectProps }) {
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

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

  handleChange(value) {
    this.setState({ single: value });

    const { handleChange } = this.props;
    if (handleChange) {
      handleChange(value);
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
  handleChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string
};

SearchBar.defaultProps = {
  handleChange: null,
  options: DEFAULT_OPTIONS,
  placeholder: ''
};

export default withStyles(styles)(SearchBar);

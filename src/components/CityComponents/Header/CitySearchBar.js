import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import { MenuItem, Paper, TextField, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const suggestions = [
  { city: 'Nairobi, Kenya' },
  { city: 'Lagos, Nigeria' },
  { city: 'Dar-es-Salaam, Tanzania' }
].map(suggestion => ({
  value: suggestion.city,
  label: suggestion.city
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    paddingTop: '2.5rem',
    width: '300px'
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
    width: '300px'
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
    fontSize: 18,
    color: '#164B3E',
    paddingLeft: '1rem'
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  css1wy0on6: {
    //visibility: "hidden",
    width: '0'
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function Menu(props) {
  return (
    <Paper
      style={{ width: '300px' }}
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
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

class CitySearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      single: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ single: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          options={suggestions}
          components={components}
          value={this.state.single}
          onChange={this.handleChange}
          placeholder="Search for your city ...."
        />
      </div>
    );
  }
}

CitySearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CitySearchBar);

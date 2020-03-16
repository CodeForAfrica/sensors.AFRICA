import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import {
  MenuItem,
  Paper,
  TextField,
  Typography,
  Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CITIES_LOCATION } from '../api';
import locateIcon from '../assets/images/icons/locate.svg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '5rem',
    paddingLeft: '2rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '3rem'
    }
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
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      noOptionsMessage: PropTypes.string
    })
  })
};
NoOptionsMessage.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}
inputComponent.propTypes = {
  inputRef: PropTypes.shape(),
  props: PropTypes.shape({})
};
inputComponent.defaultProps = {
  inputRef: null,
  props: null
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
  ]),
  innerProps: PropTypes.shape({}),
  innerRef: PropTypes.node,
  selectProps: PropTypes.shape({
    textFieldProps: PropTypes.string,
    classes: PropTypes.shape({
      input: PropTypes.string
    })
  })
};
Control.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: null,
  selectProps: null
};

function Option({
  data,
  children,
  innerProps: { onClick, ...props },
  innerRef,
  isFocused,
  isSelected,
  selectOption
}) {
  const [label, setLabel] = useState(children);
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        color: '#fff',
        fontWeight: isSelected ? 500 : 400
      }}
      {...props}
      onClick={e => {
        if (data.value === 'locate-me') {
          setLabel('LOCATING...');
          navigator.geolocation.getCurrentPosition(
            async ({ coords: { latitude, longitude } }) => {
              const { error, address } = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
              ).then(res => res.json());

              // If not really there
              if (error || !address) {
                setLabel('COULD NOT LOCATE');
              } else {
                // Find country
                const foundEntry = Object.entries(CITIES_LOCATION).find(
                  ([, country]) => address.country === country.name
                );
                if (foundEntry) {
                  const [slug] = foundEntry;
                  selectOption({ value: slug });
                } else {
                  setLabel(
                    <p style={{ lineHeight: '1em' }}>
                      {address.city}, {address.country}
                      <br />
                      <b style={{ fontSize: '0.625rem' }}>
                        Is not covered by sensorsAFRICA
                      </b>
                    </p>
                  );
                }
              }
            },
            failure => setLabel(failure.message.toUpperCase()),
            {
              timeout: 10000
            }
          );
        } else {
          onClick(e);
        }
      }}
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item>{label}</Grid>

        {data.value === 'locate-me' && (
          <Grid item>
            <img alt="icon" src={locateIcon} />
          </Grid>
        )}
      </Grid>
    </MenuItem>
  );
}
Option.propTypes = {
  selectOption: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  innerProps: PropTypes.shape({}),
  innerRef: PropTypes.node,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
};
Option.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: null,
  isFocused: false,
  isSelected: false
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
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      placeholder: PropTypes.string
    })
  })
};
Placeholder.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null
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
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      singleValue: PropTypes.string
    })
  })
};
SingleValue.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null
};

function ValueContainer({ children, selectProps }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}
ValueContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      valueContainer: PropTypes.string
    })
  })
};
ValueContainer.defaultProps = {
  children: null,
  selectProps: null
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
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      paper: PropTypes.string
    })
  })
};
Menu.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null
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

const DEFAULT_OPTIONS = [{ value: 'locate-me', label: 'LOCATE ME' }].concat(
  Object.values(CITIES_LOCATION).map(({ slug: value, name: label }) => ({
    value,
    label
  }))
);

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

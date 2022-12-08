import { MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Select from "react-select";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "5rem",
    // paddingLeft: "2rem",
    // [theme.breakpoints.down("sm")]: {
    //   paddingLeft: "3rem",
    // },
  },
  selectDropdown: {
    width: "100%",
    display: "flex",
  },
  countrySelect: {
    marginRight: "1rem",
  },
  citySelect: {
    // when disabled, the select is greyed out
    // and the cursor is not a pointer
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
  input: {
    display: "flex",
    padding: 0,
    height: "3rem",
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: theme.spacing(2),
    width: 300,
    [theme.breakpoints.down("sm")]: {
      width: 250,
    },
    [theme.breakpoints.down("xs")]: {
      width: 200,
    },
  },
  chip: {
    margin: `${theme.spacing(0.5)}px ${theme.spacing.unit / 4}px`,
  },
  noOptionsMessage: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16,
    color: "#164B3E",
    paddingLeft: "1rem",
  },
  paper: {
    position: "absolute",
    zIndex: 2,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    background: theme.palette.primary.main,
  },
}));

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
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      noOptionsMessage: PropTypes.string,
    }),
  }),
};

NoOptionsMessage.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null,
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.shape(),
  props: PropTypes.shape({}),
};

inputComponent.defaultProps = {
  inputRef: null,
  props: null,
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
          ...innerProps,
        },
      }}
      {...selectProps.textFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  innerRef: PropTypes.node,
  selectProps: PropTypes.shape({
    textFieldProps: PropTypes.string,
    classes: PropTypes.shape({
      input: PropTypes.string,
    }),
  }),
};

Control.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: null,
  selectProps: null,
};

function Option({ children, innerProps, innerRef, isFocused, isSelected }) {
  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      component="div"
      style={{
        color: "#fff",
        fontWeight: isSelected ? 500 : 400,
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
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  innerRef: PropTypes.node,
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

Option.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: null,
  isFocused: false,
  isSelected: false,
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
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      placeholder: PropTypes.string,
    }),
  }),
};

Placeholder.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null,
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
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      singleValue: PropTypes.string,
    }),
  }),
};

SingleValue.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null,
};

function ValueContainer({ children, selectProps }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

ValueContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      valueContainer: PropTypes.string,
    }),
  }),
};

ValueContainer.defaultProps = {
  children: null,
  selectProps: null,
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
    PropTypes.node,
  ]),
  innerProps: PropTypes.shape({}),
  selectProps: PropTypes.shape({
    classes: PropTypes.shape({
      paper: PropTypes.string,
    }),
  }),
};

Menu.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null,
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
  DropdownIndicator: null,
};

const DEFAULT_OPTIONS = [
  { value: "nairobi", label: "Nairobi", country: "Kenya" },
  { value: "kisumu", label: "Kisumu", country: "Kenya" },
  { value: "nakuru", label: "Nakuru", country: "Kenya" },
  {
    value: "dar-es-salaam",
    label: "Dar-es-Salaam",
    country: "Tanzania",
  },
  { value: "abuja", label: "Abuja", country: "Nigeria" },
  { value: "lagos", label: "Lagos", country: "Nigeria" },
  {
    value: "port-harcourt",
    label: "Port Harcourt",
    country: "Nigeria",
  },
  { value: "ilorin", label: "Ilorin", country: "Nigeria" },
  { value: "maiduguri", label: "Maiduguri", country: "Nigeria" },
];

function SearchBar({ handleSearch, placeholder, options, ...props }) {
  const classes = useStyles(props);
  const [single, setSingle] = useState();
  const [country, setCountry] = useState();
  const [filteredCities, setFilteredCities] = useState([]);

  // filter out unique countries
  const countries = [...new Set(options.map((option) => option.country))];
  const countryOptions = countries.map((c) => ({
    value: c,
    label: c,
  }));

  const handleChange = (city) => {
    setSingle(city);
    if (handleSearch) {
      handleSearch(city);
    }
  };

  const handleCountryChange = (selectedCountry) => {
    if (selectedCountry) {
      setCountry(selectedCountry);
      let filtered = options.filter(
        (option) => option.country === selectedCountry.value
      );
      // sort filtered cities alphabetically
      filtered = filtered.sort((a, b) => {
        return a.label > b.label ? 1 : -1;
      });
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.selectDropdown}>
        <Select
          classes={classes}
          className={classes.countrySelect}
          options={countryOptions}
          components={components}
          value={country}
          onChange={handleCountryChange}
          placeholder="Country"
        />
        <Select
          classes={classes}
          className={classes.citySelect}
          options={filteredCities}
          components={components}
          value={single}
          onChange={handleChange}
          placeholder={placeholder}
          isDisabled={!filteredCities.length}
        />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  placeholder: PropTypes.string,
};

SearchBar.defaultProps = {
  handleSearch: null,
  options: DEFAULT_OPTIONS,
  placeholder: "",
};

export default SearchBar;

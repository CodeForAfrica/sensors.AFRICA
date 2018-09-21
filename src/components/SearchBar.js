import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const suggestions = [
  { city: "Nairobi, Kenya" },
  { city: "Lagos, Nigeria" },
  { city: "Dar-es-Salaam, Tanzania" }
].map(suggestion => ({
  value: suggestion.city,
  label: suggestion.city
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250,
    paddingTop: "2.5rem"
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: theme.spacing.unit * 2,
    width: "300px"
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 18,
    color: "#164B3E",
    paddingLeft: "1rem"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: "27%",
    right: "25%",
    width: 300
  },
  css1wy0on6: {
    //visibility: "hidden",
    width: "0"
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
  state = {
    single: null,
    multi: null
  };

  handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Select
          classes={classes}
          options={suggestions}
          components={components}
          value={this.state.single}
          onChange={this.handleChange("single")}
          placeholder="Search a city ...."
        />
      </div>
    );
  }
}

CitySearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CitySearchBar);

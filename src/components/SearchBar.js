import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";

const suggestions = [
  { 'value':'nairobi', 'label': "Nairobi, Kenya" },
  { 'value':'lagos', 'label': "Lagos, Nigeria" },
  { 'value':'dar-es-salaam', 'label': "Dar-es-Salaam, Tanzania" }
]

//To Do: needs to be pulled from an api
const airPollutionLevel = {
  'nairobi': 17,
  'lagos': 20,
  'dar-es-salaam': 18
}

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

  handleChange = (city) => {
    this.props.history.push({ pathname: "/air/city",
                              state:
                              {'cityObj': city,
                               'cityAirPolLevel': airPollutionLevel[city.value]
                              }
                            });
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
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

CitySearchBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CitySearchBar);

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import CityMenuBar from "@/sensorsafrica/components/City/Header/CityMenuBar";
import AirCityHeaderContent from "@/sensorsafrica/components/Header/JumboContent/AirCityHeaderContent";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    borderRadius: "none",
    height: 450,
    [theme.breakpoints.up("md")]: {
      height: 646,
    },
  },
}));

function CityHeader({
  airPol,
  airPolDescription,
  aqColor,
  city,
  handleSearch,
  width,
  ...props
}) {
  const classes = useStyles(props);
  const theme = useTheme();
  let backgroundColor = aqColor;
  if (useMediaQuery(theme.breakpoints.up("md"))) {
    backgroundColor = "#2fb56b";
  }

  return (
    <Grid container className={classes.jumbotron} style={{ backgroundColor }}>
      <Grid item xs={12}>
        <CityMenuBar handleSearch={handleSearch} />
        <AirCityHeaderContent
          city={city}
          airPol={airPol}
          airPolDescription={airPolDescription}
        />
      </Grid>
    </Grid>
  );
}

CityHeader.propTypes = {
  airPol: PropTypes.string.isRequired,
  airPolDescription: PropTypes.string.isRequired,
  aqColor: PropTypes.string.isRequired,
  city: PropTypes.shape({}).isRequired,
  handleSearch: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default CityHeader;

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import AirHeaderContent from "@/sensorsafrica/components/Header/JumboContent/AirHeaderContent";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    borderRadius: "none",
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
}));

function AirHeader({ handleSearch, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.jumbotron}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <AirHeaderContent handleSearch={handleSearch} />
      </Grid>
    </Grid>
  );
}

AirHeader.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default AirHeader;

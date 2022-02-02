import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import SearchBar from "@/sensorsafrica/components/SearchBar";

const useStyles = makeStyles((theme) => ({
  titleSection: {
    flexGrow: 1,
    textAlign: "center",
    paddingTop: "6rem",
    [theme.breakpoints.up("md")]: {
      paddingRight: "20%",
      paddingLeft: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: "25%",
      paddingLeft: "25%",
    },
  },
  headerText: {
    color: "white",
    paddingBottom: "1rem",
  },
  searchBar: {
    paddingBottom: "6rem",
  },
}));

function AirHeaderContent({ handleSearch, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.titleSection}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          WE&apos;VE TESTED THE QUALITY
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          OF YOUR CITY&apos;S AIR.
        </Typography>
      </Grid>
      <Grid item className={classes.searchBar}>
        <SearchBar
          placeholder="Search for your city ..."
          handleSearch={handleSearch}
        />
      </Grid>
    </Grid>
  );
}

AirHeaderContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default AirHeaderContent;

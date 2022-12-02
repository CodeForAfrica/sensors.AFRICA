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

function HeaderContent({ handleSearch, header1, header2, ...props }) {
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
          {header1}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          {header2}
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

HeaderContent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  header1: PropTypes.string.isRequired,
  header2: PropTypes.string.isRequired,
};

export default HeaderContent;

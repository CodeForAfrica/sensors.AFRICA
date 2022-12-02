import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import HeaderContent from "@/sensorsafrica/components/Header/JumboContent/HeaderContent";

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

function PageHeader({
  handleSearch,
  header1,
  header2,
  searchOptions,
  ...props
}) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.jumbotron}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <HeaderContent
          handleSearch={handleSearch}
          header1={header1}
          header2={header2}
          searchOptions={searchOptions}
        />
      </Grid>
    </Grid>
  );
}

PageHeader.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  header1: PropTypes.string.isRequired,
  header2: PropTypes.string.isRequired,
  searchOptions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PageHeader;

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles({
  titleSection: {
    flexGrow: 1,
    textAlign: "center",
    paddingTop: "2rem",
  },
  headerText: {
    color: "white",
    paddingBottom: "1rem",
  },
});

function HealthClimateContent({ title }) {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.titleSection}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h3" className={classes.headerText}>
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
}

HealthClimateContent.propTypes = {
  title: PropTypes.string,
};
HealthClimateContent.defaultProps = {
  title: "",
};

export default HealthClimateContent;

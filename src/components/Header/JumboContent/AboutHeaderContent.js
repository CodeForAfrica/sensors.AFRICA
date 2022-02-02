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
    textTransform: "none",
  },
});

function AboutHeaderContent({ title, subheading, ...props }) {
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
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12} container justifyContent="center" alignItems="center">
        <Grid item md={8}>
          <Typography className={classes.headerText}>{subheading}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

AboutHeaderContent.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
};

AboutHeaderContent.defaultProps = {
  title: "",
  subheading: "",
};

export default AboutHeaderContent;

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: "2rem",
    textAlign: "center",
  },
  img: {
    height: "5rem",
    maxWidth: "100%",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  mainTitle: {
    color: "#fff",
    textAlign: "center",
    fontSize: theme.typography.h6.fontSize,
  },
  body: {
    paddingTop: "1.5rem",
  },
  bodyCopy: {
    color: "#fff",
    textAlign: "center",
  },
}));

function PollutionBurden({ icon, title, burden, ...props }) {
  const classes = useStyles(props);

  return (
    <Grid
      direction="row"
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Image src={icon} alt={title} className={classes.img} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.mainTitle}>
          {title}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        className={classes.body}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="body2" className={classes.bodyCopy}>
          {burden}
        </Typography>
      </Grid>
    </Grid>
  );
}

PollutionBurden.propTypes = {
  burden: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]).isRequired,
  title: PropTypes.string.isRequired,
};

export default PollutionBurden;

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import StoryList from "@/sensorsafrica/components/Showcase/StoryList";

const useStyles = makeStyles({
  root: {
    paddingTop: "4rem",
    backgroundColor: "white",
    paddingBottom: "4rem",
  },
  headline: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  headlineTitle: {
    textAlign: "center",
    paddingBottom: "1rem",
  },
});

function Showcase(props) {
  const classes = useStyles(props);
  const { title, headline, storiesLink } = props;

  return (
    <Grid className={classes.root}>
      <Grid item xs={12} className={classes.headline}>
        <Typography variant="h3" className={classes.headlineTitle}>
          {title}
        </Typography>
        <Typography variant="body1">{headline}</Typography>
      </Grid>
      <Grid item xs={12}>
        <StoryList storiesLink={storiesLink} />
      </Grid>
    </Grid>
  );
}

Showcase.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  storiesLink: PropTypes.string.isRequired,
};

export default Showcase;

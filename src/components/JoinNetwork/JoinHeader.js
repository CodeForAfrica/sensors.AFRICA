import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import JoinNetworkContent from "@/sensorsafrica/components/Header/JumboContent/JoinHeaderContent";

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

function JoinHeader(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.jumbotron}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <JoinNetworkContent
          title="JOIN THE NETWORK"
          subheading="Are you interested in hosting a sensor, using our data or championing air quality? Contact us using the links below to get started."
        />
      </Grid>
    </Grid>
  );
}

export default JoinHeader;

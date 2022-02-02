import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import backgroundImage from "@/sensorsafrica/assets/images/background/bgsupport.jpg";
import Footer from "@/sensorsafrica/components/Footer";
import Navbar from "@/sensorsafrica/components/Header/Navbar";
import JoinHeader from "@/sensorsafrica/components/JoinNetwork/JoinHeader";
import PartnerLogos from "@/sensorsafrica/components/PartnerLogos";
import Support from "@/sensorsafrica/components/Support";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  joinNetworkSupport: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    [theme.breakpoints.up("md")]: {
      height: "40rem",
      alignItems: "center",
    },
  },
  joinNetworkPartnerLogos: {
    // Due to the image used in support, no padding top for logos
    paddingTop: "3rem",
  },
}));

function JoinNetwork(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <JoinHeader />
      </Grid>
      <Grid item xs={12}>
        <Support className={classes.joinNetworkSupport} />
      </Grid>
      <Grid item xs={12} className={classes.joinNetworkPartnerLogos}>
        <PartnerLogos />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default JoinNetwork;

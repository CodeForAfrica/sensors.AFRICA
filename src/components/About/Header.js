import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import AboutHeaderContent from "@/sensorsafrica/components/Header/JumboContent/AboutHeaderContent";
import MenuBar from "@/sensorsafrica/components/Header/MenuBar";

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "none",
    [theme.breakpoints.up("md")]: {
      height: 450,
    },
  },
  link: {
    paddingRight: "0.2rem",
    paddingLeft: "0.2rem",
    color: "white",
    "&:hover": {
      color: "#2FB56B",
    },
  },
}));

function AboutHeader(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.jumbotron}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <MenuBar alwaysActive showMenu={false} />
      </Grid>
      <Grid item xs={12}>
        <AboutHeaderContent
          title="ABOUT sensors.AFRICA"
          subheading={[
            "sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities. ",
            "The air quality sensors use open source technology from the",
            <a
              href="https://luftdaten.info/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              Luftdaten project
            </a>,
            ". The initiative was seed-funded by innovateAFRICA and is being incubated by Code for Africa.",
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default AboutHeader;

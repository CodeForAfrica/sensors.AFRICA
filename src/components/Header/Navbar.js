import { AppBar, Grid, Hidden, MenuItem, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import MenuBar from "@/sensorsafrica/components/Header/MenuBar";
import IconLogo from "@/sensorsafrica/components/IconLogo";
import Link from "@/sensorsafrica/components/Link";
import SocialMedia from "@/sensorsafrica/components/SocialMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  appBar: {
    backgroundColor: "#2e2e2e",
    boxShadow: "none",
  },
  toolbar: {
    [theme.breakpoints.up("md")]: {
      paddingRight: "8%",
      paddingLeft: "8%",
    },
  },
  airText: {
    color: "#2FB56B",
    transition: "all .5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#f3f33",
    },
    fontFamily: "Anton",
  },
  waterText: {
    color: "#4972B8",
    transition: "all .5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#f3f33",
    },
    fontFamily: "Anton",
  },
  soundText: {
    color: "#B64598",
    transition: "all .5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#f3f33",
    },
    fontFamily: "Anton",
  },
  radiationText: {
    color: "#F57C00",
    transition: "all .5s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      color: "#f3f33",
    },
    fontFamily: "Anton",
  },
  airlink: {
    textDecoration: "none",
    color: "#2FB56B",
    "&:hover": {
      textDecoration: "none",
    },
  },
  waterlink: {
    textDecoration: "none",
    color: "#4972B8",
  },
  soundlink: {
    textDecoration: "none",
    color: "#B64598",
  },
  radiationlink: {
    textDecoration: "none",
    color: "#F57C00",
  },
  logoGrid: {
    paddingTop: "0.4rem",
  },
  mediaGrid: {
    paddingRight: theme.spacing(1),
  },
}));

function Navbar(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        {/* Position sticky is not universally supported so the attribute reverts to static when unavailable */}
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} disableGutters>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              // className={classes.linkGrid}
            >
              <Grid item>
                <Grid container>
                  <div className={classes.logoGrid}>
                    <IconLogo />
                  </div>
                  <MenuItem className={classes.airText}>
                    <Link href="/air" className={classes.airlink}>
                      AIR
                    </Link>
                  </MenuItem>

                  <MenuItem className={classes.waterText}>
                    <Link href="/water" className={classes.waterlink}>
                      WATER
                    </Link>
                  </MenuItem>
                  <MenuItem className={classes.soundText}>
                    <Link href="/sound" className={classes.soundlink}>
                      SOUND
                    </Link>
                  </MenuItem>
                  <MenuItem className={classes.radiationText}>
                    <Link href="/radiation" className={classes.radiationlink}>
                      RADIATION
                    </Link>
                  </MenuItem>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  item
                  container
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  <Hidden smDown>
                    <Grid item>
                      <SocialMedia color="#2FB56B" />
                    </Grid>
                  </Hidden>
                  <Grid item>
                    <MenuBar />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
}

export default Navbar;

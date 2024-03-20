import {
  Card,
  CardActionArea,
  Grid,
  Typography,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import alicia from "@/sensorsafrica/assets/images/team/Alicia.jpg";
import augustine from "@/sensorsafrica/assets/images/team/augustine.jpg";
import gideon from "@/sensorsafrica/assets/images/team/gideon.jpg";
//import kirah from "@/sensorsafrica/assets/images/team/kirah.jpeg";
import usman from "@/sensorsafrica/assets/images/team/usman.jpeg";
import Figure from "@/sensorsafrica/components/Figure";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "2.5rem",
    paddingBottom: "2.5rem",
    backgroundColor: "white",
  },
  staffRoot: {
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "0.1rem",
      marginRight: "0.1rem",
      width: "18.5rem",
      display: "inline-block",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "1rem",
      marginRight: "1rem",
      width: "20.75rem",
    },
  },
  cardMedia: {
    height: 300, // To fit all image sizes
    width: "100%",
    objectFit: "fit",
    maxWidth: "20.75rem",
    margin: "auto",
    overflow: "hidden",
    backgroundSize: "contain",
  },
  carContent: {
    padding: 0,
  },
  title: {
    fontWeight: 800,
    fontSize: "1rem",
    marginBottom: theme.spacing(3),
  },
  h6: {
    textTransform: "Uppercase",
    fontWeight: "bolder",
  },
  a: {
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.87)",
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
}));

function Staff(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography variant="h6" align="center" className={classes.title}>
          CONTRIBUTORS AND STAFF
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.staffRoot}>
        <Card className={classes.card}>
          <CardActionArea>
            <Figure src={alicia} alt="Alicia" className={classes.cardMedia} />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                ALICIA OLAGO
              </Typography>
              <Typography variant="subtitle1">
                alicia.olago@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://www.linkedin.com/in/aliciaolago/">
                  @Alicia Olago
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* <Card className={classes.card}>
          <CardActionArea>
            <Figure src={kirah} alt="Kirah" className={classes.cardMedia} />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                WARUKIRA THEURI
              </Typography>
              <Typography variant="subtitle1">
                kirah@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://twitter.com/warukira_m">
                  @warukira_m
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}

        <Card className={classes.card}>
          <CardActionArea>
            <Figure
              src={augustine}
              alt="Augustine"
              className={classes.cardMedia}
            />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                AUGUSTINE MWENDWA
              </Typography>
              <Typography variant="subtitle1">
                mwendwa.mutinda@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a
                  className={classes.a}
                  href="https://www.linkedin.com/in/augustine-mwendwa-b00420145/"
                >
                  @Eng. Augustine Mwendwa
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <Figure src={gideon} alt="Gideon" className={classes.cardMedia} />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                GIDEON MAINA
              </Typography>
              <Typography variant="subtitle1">
                gideon@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://www.linkedin.com/in/gideonmaina/">
                  @Gideon Maina
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <Figure src={usman} alt="Gideon" className={classes.cardMedia} />
            <CardContent>
              <Typography variant="h6" className={classes.h6}>
                AHMED BIU USMAN
              </Typography>
              <Typography variant="subtitle1">
                usman@codeforafrica.org
              </Typography>
              <Typography variant="subtitle1">
                <a className={classes.a} href="https://www.linkedin.com/in/usman-ahmed-343513187/">
                  @Usman Ahmed
                </a>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Staff;

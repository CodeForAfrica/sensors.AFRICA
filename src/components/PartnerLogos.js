import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import car from "@/sensorsafrica/assets/images/partners/car.png";
import godown from "@/sensorsafrica/assets/images/partners/godown.png";
import liquidtelcom from "@/sensorsafrica/assets/images/partners/liquidtelcom.png";
import msjc from "@/sensorsafrica/assets/images/partners/msjc.png";
import data4sdg from "@/sensorsafrica/assets/images/partners/partnershipsdg.png";
import worldbank from "@/sensorsafrica/assets/images/partners/worldbankgroup.png";
import Figure from "@/sensorsafrica/components/Figure";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.common.white,
  },
  title: {
    backgroundColor: "white",
    padding: "2rem 0",
    [theme.breakpoints.down("md")]: {
      paddingTop: "3rem",
    },
  },
  partnersLogo: {
    padding: "2rem 0",
  },
  worldBankLogo: {
    width: "100%",
    textAlign: "center",
    padding: "2rem 0",
  },
  carLogo: {
    width: "100%",
    textAlign: "center",
    padding: "2rem 0",
  },
  liquidLogo: {
    width: "100%",
    textAlign: "center",
    padding: "2rem 0",
  },
  msjcLogo: {
    width: "100%",
    textAlign: "center",
    padding: "2rem 0",
  },
  globalLogo: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "2rem",
  },
  godownLogo: {
    width: "100%",
    textAlign: "center",
    paddingBottom: "2rem",
  },
  germanCoopLogo: {
    width: "100%",
    textAlign: "center",
    paddingTop: 0,
    paddingBottom: "2rem",
  },
  img: {
    maxWidth: "100%",
    height: "100px",
    filter: "grayscale(100%)",
  },
}));

function PartnerLogos(props) {
  const classes = useStyles(props);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h3">OUR PARTNERS</Typography>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.partnersLogo}
      >
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.worldBankLogo}>
            <Figure src={worldbank} alt="World Bank" className={classes.img} />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.liquidLogo}>
            <Figure
              src={liquidtelcom}
              alt="Liquid Telcom"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.globalLogo}>
            <Figure
              src={data4sdg}
              alt="Global Partnership for Sustainable Development Data"
              className={classes.img}
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.partnersLogo}
      >
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.carLogo}>
            <Figure
              src={car}
              alt="Center for Atmospherice Research"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.msjcLogo}>
            <Figure
              src={msjc}
              alt="Mathare Socisal Justice Centre"
              className={classes.img}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <div className={classes.godownLogo}>
            <Figure
              src={godown}
              alt="The Godown Arts Centre"
              className={classes.img}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PartnerLogos;

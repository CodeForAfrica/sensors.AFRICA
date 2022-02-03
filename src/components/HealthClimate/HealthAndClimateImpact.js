import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

import ClimateImpact from "@/sensorsafrica/assets/images/climateimpacticon.png";
import HealthImpact from "@/sensorsafrica/assets/images/healthimpacticon.png";
import ImpactCard from "@/sensorsafrica/components/HealthClimate/ImpactCards";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "3rem",
    backgroundColor: "white",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "3rem",
    },
  },
  health: {
    [theme.breakpoints.up("md")]: {
      marginRight: "4.8125rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: "1.875rem",
    },
  },
  climate: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "4.8125rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "1.875rem",
    },
  },
}));

function HealthClimateCards(props) {
  const classes = useStyles(props);

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <div className={classes.health}>
          <ImpactCard
            title="Health Impact"
            icon={HealthImpact}
            impact="
                Tiny, invisible particles of pollution penetrate deep into our
                lungs, bloodstream and bodies. These pollutants are responsible
                for about one-third  of deaths from strokes, chronic respiratory
                diseases, and lung cancer as well as one-quarter of deaths from
                heart attacks. Ground Level ozone that produced from the
                interaction of many different pollutants in sunlight is also a
                cause of asthma and chronic respiratory diseases.
              "
            dark
          />
        </div>
      </Grid>

      <Grid item>
        <div className={classes.climate}>
          <ImpactCard
            title="Climate Impact"
            icon={ClimateImpact}
            impact="
                Short-lived pollutants(SLCPs) are among those pollutants most
                linked with both health effects and near-term warming of the
                planet. They persist in the atmosphere for as little as a few
                days or up to a few days or up to a few decades, so reducing
                them can have an almost immediate health and climate benefits
                for living in places where levels fall.
              "
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default HealthClimateCards;

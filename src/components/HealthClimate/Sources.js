import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

import PollutionSource from './PollutionSource';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  // For groundLevel, blackCarbon, and Methane cards, include margins in width
  // since we want the same background color
  groundLevel: {
    width: '100vw',
    backgroundColor: '#f3f3f3',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  blackCarbon: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  methane: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  mainTitle: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: theme.typography.fontSize,
  },
}));

function Sources() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="h6"
          alignItems="center"
          className={classes.mainTitle}
        >
          Sources of Pollution
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="strech"
          style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
        >
          <div className={classes.groundLevel}>
            <PollutionSource
              title="Ground Level Ozone"
              sources="
              Forms when emissions of methane, nitrogen oxides and other
              'precursor' pollutants from industry, traffic, waste and energy
              production interact with the presence of sunlight."
              impact="
              A major factor in respiratory illness has been shown to decrease
              crop yields,spurring food security challenges and security."
              reduction="
              Forms when emissions of methane, nitrogen oxides and other
              'precursor' pollutants from industry, traffic, waste and energy
              production interact with the presence of sunlight."
            />
          </div>
          <div className={classes.blackCarbon}>
            <PollutionSource
              title="Black Carbon"
              sources="
              Produced most often by diesel engines, burning trash, and cooking
              or heating stoves that burn coal, kerosine or biomass (organic
              matter such as wood or animal waste)."
              impact="
              Black carbon particles are fine enough to penetrate deep into the
              lungs, bloodstream, heart and brain causing inflammatory responses
              and other long-term health effects."
              reduction="
              Fortunately,  its lifespan is only up to ten days, so if the emission
              of black carbon and other short-lived climates pollutants were
              dramatically reduced in the next few years, global warming by
              2050 would slow by as much as 5˚C."
              backgroundColor="#fff"
            />
          </div>
          <div className={classes.methane}>
            <PollutionSource
              title="Methane"
              sources="
              40 %of generated methane emissions come from agriculture, primary
              rice, paddies and livestock production. Thisis followed by
              emissions from sewage and solid waste and oil and gas
              production."
              impact="
              Methane emissions contribute significantly to the development of
              ground-level ozone; chronic  exposure to ozone is a factor of
              asthma and other chronic respiratory illness and can harm
              childhood lung development."
              reduction="
              Methane persists for a decade, but improved waste management
              methods, including capture and combustion of methane as a
              clean energy source, would rapidly begin depleting emissions."
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Sources;

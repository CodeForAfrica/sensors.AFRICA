import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography } from '@material-ui/core';

import Content from './Content';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  // For air, water, and stormwatch cards, include margins in width
  // since we want the same background color
  airContent: {
    width: '100vw',
    backgroundColor: '#f3f3f3',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  water: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  stormWatch: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  mainTitle: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(6),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  caption: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'right',
    },
  },
  sources: {
    padding: '1rem 0',
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '59.625rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '79.5rem',
    },
    '& > ul': {
      listStyle: 'none',
    },
  },
}));

function DescriptionContent(props) {
  const classes = useStyles(props);
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
          Projects under sensors.AFRICA
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="strech">
          <div className={classes.airContent}>
            <Content
              title="AIR"
              description="
              The World Health Organisation reported in 2018 that air pollution causes 
              about 7 million premature deaths globally each year. 
              Indoor air pollution accounts for 3.8 million deaths globally, while outdoor
              (ambient) air pollution causes 4.2 million deaths every year. In
              addition to deaths directly attributable to air pollution, exposure
              increases the risk of respiratory diseases and cardiovascular
              conditions. The leading pollutant is particulate matter (PM), which is
              composed of sulfate, nitrates, ammonia, sodium chloride, black carbon,
              mineral dust and water droplets. Citizens and governments are
              increasingly aware of the toxic health risks from air pollution but
              don’t have easily accessible, hyper-local and real-time data that would
              provide actionable information to either avoid the effects, fight the
              causes, or stage interventions. sensors.AFRICA aims to change this with
              low-cost air quality sensors, which citizens and civic watchdogs will be
              able to use to measure, and monitor the quality of real-time air. The
              data from these air quality sensors are already being used by local
              watchdog NGOs and journalists to spotlight major public health risks
              using both the live data and data from our historical archives. We aim
              to ramp up these watchdog impacts, by giving public protectors more and
              better actionable data."
            />
          </div>
          <div className={classes.water}>
            <Content
              title="WATER"
              description="
              People living in developing nations face life-threatening environmental
              dangers from waterborne diseases, simply because they don’t have
              reliable, timely and actionable data to help make decisions and/or
              campaign for change. The Global Burden of Disease (GBD) 2018 study
              projects 642,486 deaths annually due to contaminated drinking water.
              sensors.AFRICA seeks to change this, by deploying simple low-cost
              digital sensors and advanced algorithms that give citizens real-time and
              hyperlocal updates when there are local outbreaks of cholera or otherS
              waterborne diseases or their water is contained with either chemical or
              metallic pollutants. The project does this by applying several
              technologies which include deploying revolutionary new digital
              microscopy sensors, to test for coliforms (the organism that causes
              cholera) and other waterborne pathogens. The devices automatically
              photograph and magnify water samples on-site at key community water
              sources, and then use special software to analyse for coliforms in
              real-time. If dangerous levels are detected, a public alert is broadcast
              through social media / dark social channels and local authorities are
              summoned for definitive lab-based testing. This is a quantum leap for
              communities, who currently rely on infrequent and expensive laboratory
              tests by local authorities, with water samples collected physically and
              then transported hundreds of kilometres away to labs for tests that take
              4-7 days to produce results."
              backgroundColor="#fff"
            />
          </div>
          <div className={classes.stormWatch}>
            <Content
              title="STORMWATCH"
              description="
              An estimated 5,000 fishermen drown during storms on just Lake Victoria
              every year. StormWatch will change this by using VIEWS ((Lake Victoria
              Intense storm Early Warning System) to predict thunderstorms and send
              out public alerts to villagers ahead of extreme storms on Africa's great
              lakes.VIEWS uses data from satellite imagery and specially developed
              algorithms of the afternoon’s land weather surrounding the lake to
              predict the occurrence of extreme storms later than the night with 93%
              accuracy. The prototype algorithm, produces predictions for all three
              countries bordering Lake Victoria, Kenya, Uganda and Tanzania.
              StormWatch will test the same methodology at two additional lakes in
              Tanzania, Lake Malawi and Lake Rukwa."
            />
          </div>
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItem="center">
        <div className={classes.sources}>
          <Typography variant="caption" className={classes.caption}>
            Sources retrieved from{' '}
          </Typography>
          <Typography
            variant="caption"
            className={classes.caption}
            component="ul"
          >
            <li>
              <a
                href="https://www.who.int/airpollution/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The World Bank. (2018)
              </a>
              , and
            </li>
            <li>
              <a
                href="https://www.who.int/airpollution/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Global Burden of Disease study and applications in water,
                sanitation and hygiene. (2018).
              </a>
            </li>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default DescriptionContent;

import React from 'react';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import HouseholdIcon from 'assets/images/icons/HouseholdIcon.png';
import AmbientIcon from 'assets/images/icons/AmbientIcon.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem',
    },
  },
  indoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '18.125rem',
      marginRight: '4.8125rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '29.75rem',
      marginRight: '1.875rem',
      padding: '3rem',
    },
  },
  indoorButton: {
    color: '#F3F3F3',
    borderColor: 'white',
    fontWeight: 800,
    fontSize: theme.typography.subtitle1.fontSize,
    [theme.breakpoints.up('lg')]: {
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
  outdoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '18.125rem',
      marginLeft: '4.8125rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '29.75rem',
      marginLeft: '1.875rem',
      padding: '3rem',
    },
  },
  outdoorButton: {
    fontWeight: 800,
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
  buttonLink: {
    textDecoration: 'none',
  },
  title: {
    color: 'white',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '1.5rem',
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
    },
  },
  caption: {
    color: '#F3F3F3',
    paddingBottom: '1rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      paddingTop: '2rem',
    },
  },
  cite: {
    color: '#F3F3F3',
    fontStyle: 'normal',
    textDecoration: 'underline',
  },
  cardContent: {
    color: 'white',
    textAlign: 'center',
  },
  img: {
    height: '5rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
      height: '100%',
    },
  },
}));

function IndoorOutdoor() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Card className={classes.indoor}>
        <CardContent className={classes.cardContent}>
          <img src={AmbientIcon} alt="Ambient" className={classes.img} />
          <Typography variant="h5" className={classes.title}>
            AMBIENT POLLUTION
          </Typography>
          <Typography variant="subtitle2" className={classes.caption}>
            Ambient air pollution causes an estimated{' '}
            <cite>
              <a
                href="https://www.who.int/health-topics/air-pollution#tab=tab_2"
                className={classes.cite}
                target="_blank"
                rel="noopener noreferrer"
              >
                4.2
              </a>
            </cite>{' '}
            million premature deaths each year.
          </Typography>
          <a
            href="https://www.who.int/airpollution/data/cities/en/"
            className={classes.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outlined" className={classes.indoorButton}>
              READ MORE
            </Button>
          </a>
        </CardContent>
      </Card>

      <Card className={classes.outdoor}>
        <CardContent className={classes.cardContent}>
          <img src={HouseholdIcon} alt="Housing" className={classes.img} />
          <Typography variant="h5" className={classes.title}>
            HOUSEHOLD POLLUTION
          </Typography>
          <Typography variant="subtitle2" className={classes.caption}>
            Household air pollution causes an estimated{' '}
            <cite>
              <a
                href="https://www.who.int/health-topics/air-pollution#tab=tab_3"
                className={classes.cite}
                target="_blank"
                rel="noopener noreferrer"
              >
                3.8
              </a>
            </cite>{' '}
            million premature deaths each year.
          </Typography>
          <a
            href="https://www.who.int/gho/phe/indoor_air_pollution/burden_text/en/"
            className={classes.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="contained" className={classes.outdoorButton}>
              READ MORE
            </Button>
          </a>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default IndoorOutdoor;

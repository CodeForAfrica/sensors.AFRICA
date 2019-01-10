import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IndoorIcon from '../../assets/images/indooricon.png';
import OutdoorIcon from '../../assets/images/outdooricon.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem'
    }
  },
  indoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '18.125rem',
      marginLeft: '4.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '29.75rem',
      marginLeft: '1.875rem',
      padding: '3rem'
    }
  },
  indoorButton: {
    color: '#F3F3F3',
    borderColor: 'white',
    fontWeight: 800,
    fontSize: theme.typography.subtitle1.fontSize,
    [theme.breakpoints.up('lg')]: {
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  outdoor: {
    color: 'white',
    backgroundColor: theme.palette.primary.light,
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '18.125rem',
      marginRight: '4.8125rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '37.875rem',
      height: '29.75rem',
      marginRight: '1.875rem',
      padding: '3rem'
    }
  },
  outdoorButton: {
    fontWeight: 800,
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.primary.dark,
    [theme.breakpoints.up('lg')]: {
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem'
    }
  },
  buttonLink: {
    textDecoration: 'none'
  },
  title: {
    color: 'white',
    [theme.breakpoints.up('lg')]: {
      paddingTop: '1.5rem',
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight
    }
  },
  caption: {
    color: '#F3F3F3',
    paddingBottom: '1rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      fontWeight: theme.typography.subtitle1.fontWeight,
      paddingTop: '2rem'
    }
  },
  cite: {
    color: '#F3F3F3',
    fontStyle: 'normal',
    textDecoration: 'underline dotted'
  },
  cardContent: {
    color: 'white',
    textAlign: 'center'
  },
  img: {
    height: '5rem',
    width: 'auto',
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    }
  }
});

function IndoorOutdoor({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Card className={classes.outdoor}>
          <CardContent className={classes.cardContent}>
            <img src={OutdoorIcon} alt="Housing" className={classes.img} />
            <Typography variant="h5" className={classes.title}>
              OUTDOOR POLLUTION
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              Outdoor pollution causes an estimated{' '}
              <cite>
                <a
                  href="https://www.who.int/airpollution/"
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
              <Button variant="contained" className={classes.outdoorButton}>
                READ MORE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>

      <Grid item>
        <Card className={classes.indoor}>
          <CardContent className={classes.cardContent}>
            <img src={IndoorIcon} alt="Housing" className={classes.img} />
            <Typography variant="h5" className={classes.title}>
              INDOOR POLLUTION
            </Typography>
            <Typography variant="subtitle2" className={classes.caption}>
              Indoor pollution causes an estimated{' '}
              <cite>
                <a
                  href="https://www.who.int/airpollution/"
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
              <Button variant="outlined" className={classes.indoorButton}>
                READ MORE
              </Button>
            </a>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

IndoorOutdoor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndoorOutdoor);

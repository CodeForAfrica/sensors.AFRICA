import React from 'react';
import Link from 'components/Link';

import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const howToLink = (props) => <Link href="/air/how-sensors-work" {...props} />;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      paddingBottom: '3rem',
    },
  },
  sensorsWorkCard: {
    color: '#fff',
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '13.25rem',
      marginRight: '4.8125rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '4rem',
      width: '37.875rem',
      height: '21.75rem',
      marginRight: '1.875rem',
    },
  },
  joinNowCard: {
    color: '#fff',
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    width: '100%',
    paddingTop: '1rem',
    [theme.breakpoints.up('md')]: {
      width: '25rem',
      height: '13.25rem',
      marginLeft: '4.8125rem',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '4rem',
      width: '37.875rem',
      height: '21.75rem',
      marginLeft: '1.875rem',
    },
  },
  cardContent: {
    textAlign: 'center',
  },
  typography: {
    textAlign: 'center',
    color: '#fff',
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.h4.fontSize,
      fontWeight: theme.typography.h4.fontWeight,
    },
  },
  buttonContainer: {
    paddingTop: '2rem',
    textAlign: 'center',
  },
  learnMorebutton: {
    backgroundColor: theme.palette.primary.dark,
    borderColor: '#f3f3f3',
    color: '#fff',
    height: '3rem',
    fontWeight: 800,
    fontSize: theme.typography.subtitle2.fontSize,
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
  joinNowbutton: {
    backgroundColor: '#f3f3f3',
    borderColor: '#f3f3f3',
    fontWeight: 800,
    height: '3rem',
    fontSize: theme.typography.subtitle2.fontSize,
    [theme.breakpoints.up('lg')]: {
      fontSize: theme.typography.subtitle1.fontSize,
      height: '3.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
    },
  },
}));

function CallToAction() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Card className={classes.sensorsWorkCard}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" className={classes.typography}>
            HOW DO
          </Typography>
          <Typography variant="h5" className={classes.typography}>
            SENSORS WORK?
          </Typography>
          <div className={classes.buttonContainer}>
            <Button
              variant="outlined"
              size="large"
              className={classes.learnMorebutton}
              component={howToLink}
            >
              LEARN MORE
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className={classes.joinNowCard}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" className={classes.typography}>
            GET YOUR
          </Typography>
          <Typography variant="h5" className={classes.typography}>
            CITY ON BOARD
          </Typography>
          <div className={classes.buttonContainer}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                size="large"
                className={classes.joinNowbutton}
              >
                JOIN NOW
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default CallToAction;

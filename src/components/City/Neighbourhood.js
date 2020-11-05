import React from 'react';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(6),
  },
  mainGrid: {
    paddingRight: '7rem',
    paddingLeft: '7rem',
    paddingBottom: theme.spacing(6),
  },
  offlineCard: {
    borderRadius: 0,
    borderStyle: 0,
    boxShadow: 'none',
    backgroundColor: '#f3f3fe',
  },
  onlineCard: {
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.light,
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff',
  },
  onlineCaption: {
    paddingTop: theme.spacing(3),
    color: 'white',
  },
  headline: {
    textAlign: 'center',
    fontWeight: 'bolder',
    color: theme.typography.h6.color,
    fontSize: theme.typography.fontSize,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(3),
    fontFamily: theme.typography.h6.fontFamily,
  },
  neighbourhood: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
  },
  offlineContent: {
    color: 'grey',
    opacity: 0.4,
    fontSize: theme.typography.fontSmallDefault.fontSize,
  },
  onlineContent: {
    color: '#fff',
    fontSize: theme.typography.fontSmallDefault.fontSize,
  },
  offlineCaption: {
    paddingTop: theme.spacing(3),
    color: 'grey',
    opacity: '0.4',
  },
}));

function Neighbourhood() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.headline}>
          YOUR NEIGHBOURHOOD
        </Typography>
      </Grid>

      <Grid item xs={12} className={classes.mainGrid}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={3} sm>
            <Card className={classes.onlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography variant="h6" className={classes.neighbourhood}>
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography className={classes.onlineCaption}>
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3} sm>
            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography variant="h6" className={classes.offlineContent}>
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography className={classes.offlineCaption}>
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3} sm>
            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: '#2FB56B' }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography variant="h6" className={classes.neighbourhood}>
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  className={classes.onlineCaption}
                  style={{ color: '#fff' }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3} sm>
            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: '#2FB56B' }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography variant="h6" className={classes.onlineContent}>
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography className={classes.onlineCaption}>
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={3} sm>
            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h6" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography variant="h6" className={classes.offlineContent}>
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography className={classes.offlineCaption}>
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Neighbourhood;

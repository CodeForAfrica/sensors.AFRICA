import React from 'react';

import { Grid, Typography, ListItem, List, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  findOutMore: {
    color: theme.palette.primary.dark,
  },
  buttonContained: {
    backgroundColor: theme.palette.primary.light,
    color: '#fff',
    borderRadius: 0,
    margin: theme.spacing(2),
    marginLeft: 80,
  },
  body1: {
    fontSize: '14px',
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  gridContent: {
    textAlign: 'center',
    padding: '1.5rem',
  },
  tweetContent: {
    fontSize: theme.typography.fontSize,
  },
  titleText: {
    marginLeft: '4.5rem',
    color: theme.palette.primary.light,
    fontSize: theme.typography.fontSize,
  },
}));

function ArrowCards() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ paddingTop: '1rem' }}
    >
      <Grid item xs={12} container justify="center" alignItems="center">
        <Typography variant="h6" className={classes.titleText}>
          WHO CAN I REPORT AIR SENSORS QUALITY TO?
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <List className="list-ic vertical">
          <ListItem className={classes.list}>
            <span />

            <Grid className="card">
              <Grid className={classes.gridContent}>
                <Typography variant="h6" className={classes.body1}>
                  Local Government
                </Typography>
                <Typography variant="h6" className={classes.body1}>
                  Environment Ministry
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <Grid container direction="row" justify="center" alignItems="center">
            <Typography variant="h6" className={classes.titleText}>
              WHO REPORTS HAVE BEEN SENT?
            </Typography>
          </Grid>

          <ListItem>
            <span />
            <Grid className="card">
              <Grid className={classes.gridContent}>
                <Typography variant="body1" className={classes.tweetContent}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  <u>What Reports have been sent</u>
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  30mins ago
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <span />
            <Grid className="card">
              <Grid className={classes.gridContent}>
                <Typography variant="body1" className={classes.tweetContent}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  <u>What Reports have been sent</u>
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  30mins ago
                </Typography>
              </Grid>
            </Grid>
          </ListItem>

          <ListItem>
            <span />
            <Grid className="card">
              <Grid className={classes.gridContent}>
                <Typography variant="body1" className={classes.tweetContent}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  <u>What Reports have been sent</u>
                  <b />
                </Typography>
                <Typography variant="body1" className={classes.tweetContent}>
                  30mins ago
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </List>
      </Grid>

      <Grid item xs={12} container justify="center" alignItems="center">
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          BROWSE MORE
        </Button>
      </Grid>
    </Grid>
  );
}
export default ArrowCards;

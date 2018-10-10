import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  offlineCard: {
    height: 220,
    width: '100%',
    borderRadius: 0,
    borderStyle: 0,
    boxShadow: 'none',
    backgroundColor: '#f3f3fe'
  },
  onlineCard: {
    height: 220,
    width: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    backgroundColor: '#2FB56B'
  },
  cardContent: {
    textAlign: 'center',
    color: '#fff'
  },
  caption: {
    paddingTop: theme.spacing.unit * 4
  },
  headline: {
    textAlign: 'center',
    paddingBottom: theme.spacing.unit * 3
  },
  offlineContent: {
    color: 'grey',
    opacity: 0.4
  },
  onlineContent: {
    color: '#fff'
  }
});

function Neighbourhood({ classes }) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="headline" className={classes.headline}>
          YOUR NEIGHBOURHOOD
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={6} sm>
            <Card className={classes.onlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: '#fff' }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6} sm>
            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.offlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{
                    color: 'grey',
                    opacity: '0.4'
                  }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6} sm>
            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: '#2FB56B' }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: '#fff' }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6} sm>
            <Card
              className={classes.onlineCard}
              style={{ backgroundColor: '#2FB56B' }}
            >
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.onlineContent}>
                  ONLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.onlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: '#fff' }}
                >
                  This is a placeholder for text and more information
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6} sm>
            <Card className={classes.offlineCard}>
              <CardContent className={classes.cardContent}>
                <Typography variant="title" className={classes.offlineContent}>
                  OFFLINE
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.offlineContent}
                >
                  NEIGHBOURHOOD 1
                </Typography>
                <Typography
                  variant="subheading"
                  className={classes.caption}
                  style={{ color: 'grey', opacity: '0.4' }}
                >
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

Neighbourhood.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Neighbourhood);

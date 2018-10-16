import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 3
  },
  card: {
    height: 200,
    width: 300,
    margin: theme.spacing.unit * 3,
    backgroundColor: '#F3F3F3'
  },
  cardMedia: {
    height: '100%'
  }
});

function Staff({ classes }) {
  return (
    <React.Fragment>
      <Typography variant="heading" align="center">
        COLLABORATION AND STAFF
      </Typography>
      <Grid container justify="center" align="center" className={classes.root}>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Name.Surname</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Staff);

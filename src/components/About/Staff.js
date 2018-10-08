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
    height: '200px',
    width: '300px',
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
      <Grid
        container
        direction="row"
        justify="center"
        align="center"
        className={classes.root}
      >
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} title="Team" />
          </Card>
          <Typography variant="title">Name.Surname</Typography>
          <Typography variant="subheading">
            Editor at codeforafrica.org
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Staff);

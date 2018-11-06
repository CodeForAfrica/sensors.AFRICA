import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import chege from '../../assets/images/team/chege.png';
import kirah from '../../assets/images/team/kirah.jpeg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
    backgroundColor: 'white'
  },
  staffRoot: {
    flexGrow: 1,
    padding: '1.5rem 8rem'
  },
  card: {
    height: 200,
    width: 300,
    margin: theme.spacing.unit * 3,
    backgroundColor: '#F3F3F3'
  },
  cardMedia: {
    height: '100%',
    objectFit: 'cover'
  },
  title: {
    fontWeight: 800,
    fontSize: '1rem'
  },
  h6: {
    textTransform: 'Uppercase',
    fontWeight: 'bolder'
  },
  a: {
    textDecoration: 'none',
    color: 'rgba(0, 0, 0, 0.87)',
    '&:hover': {
      color: theme.palette.primary.light
    }
  }
});

function Staff({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography variant="h6" align="center" className={classes.title}>
        CONTRIBUTORS AND STAFF
      </Typography>
      <Grid
        container
        justify="center"
        align="center"
        className={classes.staffRoot}
      >
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                component="img"
                alt="Chege"
                className={classes.cardMedia}
                src={chege}
                title="Chege"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.h6}>
              JAMES CHEGE
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Chege at codeforafrica.org
            </Typography>
            {/* <Typography variant="subtitle1">@namesurname</Typography> */}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia
                title="kirah"
                component="img"
                alt="Chege"
                className={classes.cardMedia}
                src={kirah}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.h6}>
              WARUKIRA THEURI
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Kira at codeforafrica.org
            </Typography>
            <Typography variant="subtitle1">
              <a className={classes.a} href="https://twitter.com/warukira_m">
                @warukira_m
              </a>
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
            <Typography variant="h6" className={classes.h6}>
              Name.Surname
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
            <Typography variant="subtitle1">@namesurname</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.h6}>
              Name.Surname
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
            <Typography variant="subtitle1">@namesurname</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.h6}>
              Name.Surname
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
            <Typography variant="subtitle1">@namesurname</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} title="Team" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.h6}>
              Name.Surname
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              Editor at codeforafrica.org
            </Typography>
            <Typography variant="subtitle1">@namesurname</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Staff);

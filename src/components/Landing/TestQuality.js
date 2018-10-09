import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import air from '../../assets/images/button/airbtn.png';
import water from '../../assets/images/button/waterbtn.png';
import sound from '../../assets/images/button/soundbtn.png';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  img: {
    height: 150,
    width: 'auto',
    padding: '3rem'
  },
  airCard: {
    backgroundColor: '#2FB56B',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  waterCard: {
    backgroundColor: '#4972B8',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  soundCard: {
    backgroundColor: '#B64598',
    borderRadius: 0,
    height: 250,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  }
});

function TestQuality({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant="title"
          gutterBottom
          align="center"
          style={{ color: 'white', textTransform: 'uppercase' }}
        >
          Test the quality of the city&apos;s
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingTop: '1rem' }}
        >
          <Grid item>
            <Link to="/air">
              <Card className={classes.airCard}>
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={air}
                  title="Air"
                />
              </Card>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/water">
              <Card className={classes.waterCard}>
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={water}
                  title="water"
                />
              </Card>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/sound">
              <Card className={classes.soundCard}>
                <CardMedia
                  component="img"
                  className={classes.img}
                  image={sound}
                  title="sound"
                />
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

TestQuality.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TestQuality);

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
    width: '100%',
    paddingTop: '2rem'
  },
  img: {
    height: 220,
    width: 'auto',
    padding: '3rem',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  airCard: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  waterCard: {
    backgroundColor: '#4972B8',
    borderRadius: 0,
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  soundCard: {
    backgroundColor: '#B64598',
    borderRadius: 0,
    height: 200,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 250
    }
  },
  testTitle: {
    color: 'white',
    paddingTop: '2rem',
    fontSize: '1rem',
    fontFamily: theme.typography.h6.fontFamily,
    fontWeight: 900
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
          variant="h5"
          gutterBottom
          align="center"
          className={classes.testTitle}
        >
          Test the quality of the city&apos;s :
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingTop: '1rem', paddingBottom: '3rem' }}
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

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import air from '../../assets/images/button/airbtn.png';
import water from '../../assets/images/button/waterbtn.png';
import sound from '../../assets/images/button/soundbtn.png';

const styles = {
  img: {
    height: 150,
    width: 'auto',
    padding: '3rem'
  },
  airCard: {
    backgroundColor: '#2FB56B',
    borderRadius: 0,
    height: 250,
    width: 250
  },
  waterCard: {
    backgroundColor: '#4972B8',
    borderRadius: 0,
    height: 250,
    width: 250
  },
  soundCard: {
    backgroundColor: '#B64598',
    borderRadius: 0,
    height: 250,
    width: 250
  }
};

function TestQuality({ classes }) {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Typography
        variant="title"
        gutterBottom
        align="center"
        style={{ color: 'white', textTransform: 'uppercase' }}
      >
        Test the quality of the city&apos;s
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ paddingTop: '1rem' }}
      >
        <Link to="/air/home">
          <Card className={classes.airCard}>
            <CardMedia
              component="img"
              className={classes.img}
              image={air}
              title="Air"
            />
          </Card>
        </Link>

        <Link to="/water/home">
          <Card className={classes.waterCard}>
            <CardMedia
              component="img"
              className={classes.img}
              image={water}
              title="water"
            />
          </Card>
        </Link>

        <Link to="/sound/home">
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
  );
}

TestQuality.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(TestQuality);

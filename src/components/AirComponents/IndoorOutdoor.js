import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IndoorIcon from '../../assets/images/indooricon.png';
import OutdoorIcon from '../../assets/images/outdooricon.png';

const styles = {
  indoor: {
    height: '350px',
    width: '400px',
    backgroundColor: '#164B3E',
    borderRadius: 0,
    color: 'white',
    margin: '2rem'
  },
  indoorButton: {
    borderRadius: 0,
    color: '#F3F3F3',
    borderColor: 'white'
  },
  outdoor: {
    height: '350px',
    width: '400px',
    backgroundColor: '#2FB56B',
    borderRadius: 0,
    color: 'white',
    margin: '2rem'
  },
  outdoorButton: {
    borderRadius: 0
  },
  buttonLink: {
    textDecoration: 'none'
  },
  caption: {
    paddingTop: '0.5rem',
    paddingBottom: '1rem',
    color: '#F3F3F3'
  },
  cardContent: {
    color: 'white',
    textAlign: 'center',
    paddingTop: '4rem'
  }
};

function IndoorOutdoor({ classes }) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Card className={classes.indoor}>
        <CardContent className={classes.cardContent}>
          <img src={IndoorIcon} Alt="Housing" height="100px" />
          <Typography variant="title" style={{ color: 'white' }}>
            INDOOR POLLUTION
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Indoor pollution causes an estimated 4.3 million premature deaths
            each year.
          </Typography>
          <a
            href="https://medium.com/code-for-africa/tagged/innovateafrica"
            className={classes.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outlined"
              color="upload"
              className={classes.indoorButton}
            >
              READ MORE
            </Button>
          </a>
        </CardContent>
      </Card>

      <Card className={classes.outdoor}>
        <CardContent className={classes.cardContent}>
          <img src={OutdoorIcon} Alt="Housing" height="100px" />
          <Typography variant="title" style={{ color: 'white' }}>
            OUTDOOR POLLUTION
          </Typography>
          <Typography variant="caption" className={classes.caption}>
            Outdoor pollution causes an estimated 4.2 million premature deaths
            each year.
          </Typography>
          <a
            href="https://medium.com/code-for-africa/tagged/innovateafrica"
            className={classes.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              color="upload"
              className={classes.outdoorButton}
            >
              READ MORE
            </Button>
          </a>
        </CardContent>
      </Card>
    </Grid>
  );
}

IndoorOutdoor.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(IndoorOutdoor);

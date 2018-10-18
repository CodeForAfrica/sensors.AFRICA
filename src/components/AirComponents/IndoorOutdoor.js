import React from 'react';
import PropTypes from 'prop-types';

import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import IndoorIcon from '../../assets/images/indooricon.png';
import OutdoorIcon from '../../assets/images/outdooricon.png';

const styles = theme => ({
  root: {
    paddingBottom: '4rem'
  },
  mainGrid: {
    paddingRight: '8rem',
    paddingLeft: '8rem'
  },
  indoor: {
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 0,
    color: 'white',
    margin: '2rem'
  },
  indoorButton: {
    borderRadius: 0,
    color: '#F3F3F3',
    borderColor: 'white',
    fontWeight: 'bolder'
  },
  outdoor: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    color: 'white',
    margin: '2rem'
  },
  outdoorButton: {
    borderRadius: 0,
    fontWeight: 'bolder',
    color: theme.palette.primary.dark
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
  },
  img: {
    height: '100%',
    width: 'auto'
  }
});

function IndoorOutdoor({ classes }) {
  return (
    <Grid item xs={12} className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.mainGrid}
      >
        <Grid item xs={6}>
          <Card className={classes.indoor}>
            <CardContent className={classes.cardContent}>
              <img src={IndoorIcon} Alt="Housing" className={classes.img} />
              <Typography variant="h5" style={{ color: 'white' }}>
                INDOOR POLLUTION
              </Typography>
              <Typography variant="caption" className={classes.caption}>
                Indoor pollution causes an estimated 4.3 million premature
                deaths each year.
              </Typography>
              <a
                href="https://medium.com/code-for-africa/tagged/innovateafrica"
                className={classes.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" className={classes.indoorButton}>
                  READ MORE
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.outdoor}>
            <CardContent className={classes.cardContent}>
              <img src={OutdoorIcon} Alt="Housing" className={classes.img} />
              <Typography variant="h5" style={{ color: 'white' }}>
                OUTDOOR POLLUTION
              </Typography>
              <Typography variant="caption" className={classes.caption}>
                Outdoor pollution causes an estimated 4.2 million premature
                deaths each year.
              </Typography>
              <a
                href="https://medium.com/code-for-africa/tagged/innovateafrica"
                className={classes.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="contained" className={classes.outdoorButton}>
                  READ MORE
                </Button>
              </a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

IndoorOutdoor.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IndoorOutdoor);

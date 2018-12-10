import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography, GridList, GridListTile } from '@material-ui/core';

import '../../assets/css/App.css';
import { withStyles } from '@material-ui/core/styles';

import StoryCard from './StoryCard';

import data from './Stories';

const styles = theme => ({
  root: {
    maxWidth: '100%',
    paddingTop: '4rem',
    backgroundColor: 'white',
    paddingBottom: '4rem'
  },
  headline: { paddingLeft: '9rem', textAlign: 'left', marginBottom: '3rem' },
  showcaseRoot: {
    paddingLeft: '8rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflowX: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    height: '100%',
    marginLeft: '10rem',
    paddingBottom: '3rem',
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  }
});

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }

  render() {
    const { properties, property } = this.state;
    const { classes } = this.props;

    return (
      <Grid item xs={12} className={classes.root}>
        <Grid className={classes.headline}>
          <Typography variant="display1">SHOWCASE</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid className={classes.showcaseRoot}>
          <GridList className={classes.gridList}>
            {properties.map(property => (
              <GridListTile
                style={{
                  height: '50%',
                  maxWidth: '20%',
                  margin: '1rem'
                }}
              >
                <StoryCard key={property.index} property={property} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      </Grid>
    );
  }
}

Carousel.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired,
  properties: PropTypes.object.isRequired
};

export default withStyles(styles)(Carousel);

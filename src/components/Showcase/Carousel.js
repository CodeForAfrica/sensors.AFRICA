import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import '../../assets/css/App.css';
import { withStyles } from '@material-ui/core/styles';

import StoryCard from './StoryCard';

import data from './Stories';

const styles = theme => ({
  root: { paddingTop: '4rem', backgroundColor: 'white', paddingBottom: '4rem' },
  headline: { textAlign: 'left', marginLeft: '10rem', marginBottom: '3rem' }
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
      <Grid className={classes.root}>
        <Grid item xs={12} className={classes.headline}>
          <Typography variant="display1">SHOWCASE</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid className="Slider">
          {properties.map(property => (
            <StoryCard key={property.index} property={property} />
          ))}
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

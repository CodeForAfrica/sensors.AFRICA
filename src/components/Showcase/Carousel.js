import React, { Component } from 'react';
import PropTypes from 'prop-types';

import data from './Stories';
import { Grid, Typography } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import StoryCard from './StoryCard';
const styles = theme => ({
  sliderWrapper: { paddingLeft: '4rem', flex: 1, backgroundColor: 'white' }
});

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    };
  }
  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({ property: data.properties[newIndex] });
  };
  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({ property: data.properties[newIndex] });
  };

  render() {
    const { properties, property } = this.state;
    const { classes } = this.props;

    return (
      <Grid style={{ paddingTop: '4rem', backgroundColor: 'white' }}>
        <Grid
          item
          xs={12}
          style={{ textAlign: 'left', paddingLeft: '3rem', margin: '3rem' }}
        >
          <Typography variant="display1">SHOWCASE</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          spacing={40}
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.sliderWrapper}
        >
          {properties.map(property => (
            <StoryCard key={property.index} property={property} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

Carousel.propTypes = {
  property: PropTypes.object.isRequired,
  properties: PropTypes.object.isRequired
};

export default withStyles(styles)(Carousel);

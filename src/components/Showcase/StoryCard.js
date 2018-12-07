import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../assets/css/App.css';

const styles = theme => ({
  classRoot: {
    backgroundColor: '#eee',
    maxWidth: '45%',
    height: '100%',
    border: '1px solid grey'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
});

function StoryCard({ property, classes }) {
  const { index, picture, date, title, body } = property;

  return (
    <Card id={`card-${index}`} className={classes.classRoot}>
      <CardMedia className={classes.media} image={picture} title=" Story" />
      <CardContent>
        <Typography variant="caption">{date}</Typography>
        <div style={{ paddingTop: '2rem' }}>
          <Typography variant="title">{title}</Typography>
          <Typography variant="body1">{body}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}

StoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(StoryCard);

import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  classRoot: { maxWidth: '300px', height: '100%', backgroundColor: '#eee' },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
});

function StoryCard({ property, classes }) {
  const { index, picture, date, title, body } = property;

  return (
    <Grid style={{ maxWidth: '400px' }}>
      <Card id={`card-${index}`} className={classes.classRoot}>
        <CardMedia className={classes.media} image={picture} title=" First" />
        <CardContent>
          <Typography variant="caption">{date}</Typography>
          <div style={{ paddingTop: '2rem' }}>
            <Typography variant="title">{title}</Typography>
            <Typography variant="body1">{body}</Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

StoryCard.propTypes = {
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(StoryCard);

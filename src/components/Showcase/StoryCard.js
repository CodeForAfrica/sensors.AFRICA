import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../assets/css/App.css';

const styles = theme => ({
  classRoot: {
    //maxWidth: '45%',
    height: '100%',
    backgroundColor: 'white',
    border: '0px solid'
    //border: '1px solid',
    //boxShadow:
    //'0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  cardLink: {
    textDecoration: 'none',
    transition: 'all .5s ease-in-out',
    boxShadow:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '&:hover': {
      border: '1px solid',
      transform: 'scale(1.1)',
      color: '#f3f33'
    }
  },
  body: {
    color: theme.typography.h5.color
  }
});

function StoryCard({ property, classes }) {
  const { index, image, date, title, body, link } = property;

  return (
    //<a id={`card-${index}`} href={link} className={classes.cardLink}>
    <Card id={`card-${index}`} className={classes.classRoot}>
      <CardMedia className={classes.media} image={image} title=" Story" />
      <CardContent>
        <Typography variant="caption">{date}</Typography>
        <div style={{ paddingTop: '2rem' }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle2" className={classes.body}>
            {body}
          </Typography>
        </div>
      </CardContent>
    </Card>
    //</a>
  );
}

StoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(StoryCard);

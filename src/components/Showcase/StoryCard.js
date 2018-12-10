import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Card, CardMedia, CardContent } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../assets/css/App.css';

const styles = theme => ({
  classRoot: {
    height: '100%',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#fff'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardLink: {
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      border: '1px solid',
      transform: 'scale(1.1)',
      color: '#f3f33'
    }
  },
  overline: {
    color: '#c7c7c7',
    opacity: '0.5',
    fontSize: '14px',
    paddingTop: '1rem'
  },
  body: {
    color: theme.typography.h5.color
  },
  bodyArea: { paddingTop: '2rem' }
});

function StoryCard({ property, classes }) {
  const { index, image, date, title, body, link } = property;

  return (
    <div className={classes.mainCard}>
      {/*<a id={`card-${index}`} href={link} className={classes.cardLink}>*/}
      <Card id={`card-${index}`} className={classes.classRoot}>
        <CardMedia className={classes.media} image={image} title=" Story" />
        <CardContent>
          <Typography variant="h5" className={classes.overline}>
            {date}
          </Typography>
          <div className={classes.bodyArea}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="subtitle2" className={classes.body}>
              {body}{' '}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
    //</a>
  );
}

StoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
  property: PropTypes.object.isRequired
};

export default withStyles(styles)(StoryCard);

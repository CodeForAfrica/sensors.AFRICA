import React from 'react';
import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../assets/css/App.css';

const styles = theme => ({
  root: {
    width: '100vw',
    height: '100%',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#fff'
    },
    [theme.breakpoints.up('md')]: {
      width: '19.875rem'
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem'
    }
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  cardLink: {
    textDecoration: 'none'
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
  bodyArea: {
    paddingTop: '2rem'
  }
});

function StoryCard({ story, classes }) {
  const { image, date, title, body, link } = story;

  return (
    <Card className={classes.root}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.cardLink}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title=" Story" />
          <CardContent>
            <Typography variant="h5" className={classes.overline}>
              {date}
            </Typography>
            <div className={classes.bodyArea}>
              <Typography variant="h5">Boom {title}</Typography>
              <Typography variant="subtitle2" className={classes.body}>
                {body}{' '}
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

StoryCard.propTypes = {
  classes: PropTypes.object.isRequired,
  story: PropTypes.object.isRequired
};

export default withStyles(styles)(StoryCard);

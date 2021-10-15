import React from 'react';

import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100%',
    backgroundColor: '#fafafa',
    border: '1px solid #eeeeee',
    maxWidth: '100%',
    opacity: 0.9,
    '&:hover': {
      opacity: 1,
      backgroundColor: '#fff',
    },
    [theme.breakpoints.up('md')]: {
      width: '19.875rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '26.5rem',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    width: '100%',
  },
  cardLink: {
    textDecoration: 'none',
  },
  overline: {
    color: '#c7c7c7',
    opacity: '0.5',
    fontSize: '14px',
    paddingTop: '1rem',
  },
  body: {
    color: theme.typography.h5.color,
  },
  bodyArea: {
    paddingTop: '2rem',
  },
}));

function StoryCard({ story }) {
  const classes = useStyles();
  const { image, date, title, body, link } = story;

  return (
    <Card className={classes.root}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.cardLink}
      >
        <CardActionArea
          style={{ display: 'flex', flexFlow: 'column', height: '100%' }}
        >
          <CardMedia className={classes.media} image={image} title=" Story" />
          <CardContent style={{ flexGrow: 1 }}>
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
        </CardActionArea>
      </a>
    </Card>
  );
}

export default StoryCard;

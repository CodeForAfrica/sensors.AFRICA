import React from 'react';

import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  findOutMore: {
    color: theme.palette.primary.dark,
    fontSize: theme.typography.fontSize,
    fontWeight: 'bold',
  },
  card: {
    height: '38rem',
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
  },
  cardContent: {
    textAlign: 'center',
    marginTop: '1rem',
  },
  display1: {
    color: '#fff',
    paddingTop: '2rem',
  },
  body2: {
    color: '#fff',
    paddingTop: theme.spacing(4),
  },
  caption: {
    color: '#fff',
    paddingTop: '2rem',
    textDecoration: 'underline',
  },
  cardButtonOutlined: {
    paddingTop: theme.spacing(3),
  },
  buttonLink: {
    textDecoration: 'none',
  },
}));

function HostCard() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h4" className={classes.display1}>
          HOST A SENSORS
          <br />
          CALL TO ACTION
        </Typography>
        <Grid>
          <Typography variant="body1" className={classes.body2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            ultrices ex. Duis aliquet sapien nec dui laoreet mattis
          </Typography>
        </Grid>
        <Grid style={{ paddingTop: '3rem', color: 'white' }}>
          <Typography
            varaiant="body1"
            style={{ color: '#fff', textDecoration: 'underline' }}
          >
            Local Government
          </Typography>
        </Grid>

        <Typography
          variant="body1"
          style={{ color: '#fff', textDecoration: 'underline' }}
        >
          Environment Ministry
        </Typography>
        <p className={classes.cardButtonOutlined}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
            className={classes.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="contained"
              size="large"
              className={classes.findOutMore}
            >
              FIND OUT MORE
            </Button>
          </a>
        </p>
      </CardContent>
    </Card>
  );
}

export default HostCard;

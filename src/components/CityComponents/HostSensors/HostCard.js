import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Card, CardContent, Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {},
  card: {
    height: 600,
    width: 450,
    backgroundColor: '#2FB56B',
    borderRadius: 0
  },
  cardContent: {
    textAlign: 'center',
    paddingTop: '25%'
  },
  display1: {
    color: '#fff',
    paddingTop: '2rem'
  },
  body2: {
    color: '#fff',
    paddingTop: theme.spacing.unit * 4
  },
  caption: {
    color: '#fff',
    paddingTop: '2rem',
    textDecoration: 'underline'
  },
  cardButtonOutlined: {
    paddingTop: theme.spacing.unit * 3
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

function HostCard({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" className={classes.display1}>
            HOST A SENSORS CALL TO ACTION
          </Typography>
          <Typography variant="body1" className={classes.body2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel
            eros vehicula, feugiat nisl a, mollis tortor.
          </Typography>
          <Typography varaiant="caption" className={classes.caption}>
            Local Government
          </Typography>
          <Typography
            variant="caption"
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
    </Grid>
  );
}

HostCard.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HostCard);

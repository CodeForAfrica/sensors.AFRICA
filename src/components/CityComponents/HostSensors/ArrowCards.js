import React from 'react';
import PropTypes from 'prop-types';

import {
  Card,
  Grid,
  Typography,
  ListItem,
  List,
  CardContent,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import '../../../assets/css/App.css';

const styles = theme => ({
  findOutMore: {
    color: '#164B3E'
  },
  buttonContained: {
    backgroundColor: '#2FB56B',
    color: '#fff',
    borderRadius: 0,
    margin: theme.spacing.unit * 2,
    marginLeft: 80
  },
  body2: {
    color: 'black',
    opacity: '0.8'
  }
});

function ArrowCards({ classes }) {
  return (
    <Grid
      container
      className={classes.tweetGrid}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} container justify="center" alignItems="center">
        <Typography
          variant="body1"
          style={{ marginLeft: '4.5rem', color: 'green' }}
        >
          WHO CAN I REPORT AIR SENSORS QUALITY TO?
        </Typography>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <List className="list-ic vertical">
          <ListItem className={classes.list}>
            <span />

            <Card className="card">
              <CardContent
                style={{ textDecoration: 'underline', textAlign: 'center' }}
              >
                <Typography variant="body1" className={classes.body2}>
                  Local Government
                </Typography>
                <Typography variant="body1" className={classes.body2}>
                  Environment Ministry
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card className="card">
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="body1" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card className="card">
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="body1" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>

          <ListItem>
            <span />
            <Card className="card">
              <CardContent style={{ textAlign: 'center' }}>
                <Typography variant="body1" className={classes.body2}>
                  <b>
                    <u>@david</u>
                  </b>{' '}
                  answered the question about
                </Typography>
                <Typography variant="body1" className={classes.body2}>
                  <u>What Reports have been sent</u>
                </Typography>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} container justify="center" alignItems="center">
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          BROWSE MORE
        </Button>
      </Grid>
    </Grid>
  );
}

ArrowCards.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(ArrowCards);

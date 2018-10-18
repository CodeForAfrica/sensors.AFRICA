import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const howToLink = props => <Link to="/air/how-sensors-work" {...props} />;

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  sensorsWorkCard: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    height: '100%',
    width: '26rem',
    borderRadius: '0',
    backgroundColor: theme.palette.primary.dark,
    margin: '3rem'
  },
  joinNowCard: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    height: '100%',
    width: '26rem',
    borderRadius: '0',
    backgroundColor: theme.palette.primary.light
  },
  cardContent: {
    color: '#fff',
    paddingTop: '1rem',
    paddingBottom: '1rem'
  },
  typography: {
    textAlign: 'center',
    color: '#fff',
    paddingRight: '1em',
    paddingLeft: '1em'
  },
  buttonContainer: {
    paddingTop: '2rem',
    textAlign: 'center'
  },
  learnMorebutton: {
    padding: '0.8rem',
    backgroundColor: theme.palette.primary.dark,
    border: '1px solid',
    borderColor: '#f3f3f3',
    borderRadius: 0,
    color: '#fff',
    fontWeight: 'bold'
  },
  joinNowbutton: {
    padding: '0.8rem',
    backgroundColor: '#f3f3f3',
    border: '1px solid',
    borderColor: '#f3f3f3',
    borderRadius: 0,
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  }
});

function CallToAction({ classes }) {
  return (
    <Grid
      container
      item
      xs={12}
      className={classes.root}
      justify="center"
      alignItems="center"
      spacing={40}
    >
      <Card item xs={6} className={classes.sensorsWorkCard}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" className={classes.typography}>
            HOW DO SENSORS WORK?
          </Typography>
          <Grid className={classes.buttonContainer}>
            <Button
              variant="contained"
              size="large"
              className={classes.learnMorebutton}
              component={howToLink}
            >
              LEARN MORE
            </Button>
          </Grid>
        </CardContent>
      </Card>

      <Card item xs={6} className={classes.joinNowCard}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h4" className={classes.typography}>
            GET YOUR CITY ON BOARD
          </Typography>
          <Grid className={classes.buttonContainer}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="contained"
                size="large"
                className={classes.joinNowbutton}
              >
                JOIN NOW
              </Button>
            </a>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

CallToAction.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CallToAction);

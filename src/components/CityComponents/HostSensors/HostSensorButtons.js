import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  buttonContained: {
    backgroundColor: '#2FB56B',
    color: '#fff',
    borderRadius: 0,
    margin: theme.spacing.unit * 2
  },
  buttonOutlined: {
    color: '#164B3E',
    borderRadius: 0,
    margin: theme.spacing.unit * 2
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

function HostSensorButtons({ classes }) {
  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <a
          href="https://codeforafrica.us6.list-manage.com/subscribe/post?u=65e5825507b3cec760f272e79&id=c2ff751541"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outlined"
            size="large"
            className={classes.buttonOutlined}
          >
            SUBSCRIBE
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            CONNECT
          </Button>
        </a>
      </Grid>
      <Grid item>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdYwUWsyj5VQggCmpVh4O92VWt6NQ-J6kX-jN7uAa1FOELq0w/viewform"
          className={classes.buttonLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="contained"
            size="large"
            className={classes.buttonContained}
          >
            ACT
          </Button>
        </a>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          className={classes.buttonContained}
        >
          SHARE
        </Button>
      </Grid>
    </Grid>
  );
}

HostSensorButtons.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(HostSensorButtons);

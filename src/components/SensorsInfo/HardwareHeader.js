import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import HardwareHeaderContent from '../Header/JumbotronContent/HardwareHeaderContent';

const styles = theme => ({
  jumbotron: {
    paddingBottom: '2rem',
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      height: 450
    }
  }
});

function HardwareHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <MenuBar />
      </Grid>
      <Grid item xs={12}>
        <HardwareHeaderContent
          title="THE SENSORS &amp; THEIR INNER WORKING"
          subheading="The sensors units are modular and use off-the shelf sensors and microprocessor components to create a low cost and durable package that can be setup at any location using either Wifi or GSM connectivity"
        />
      </Grid>
    </Grid>
  );
}

HardwareHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HardwareHeader);

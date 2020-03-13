import React from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HardwareHeaderContent from 'components/Header/JumboContent/HardwareHeaderContent';

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
        <HardwareHeaderContent
          title="THE SENSORS &amp; THEIR INNER WORKING"
          subheading="The sensors units are modular and use off-the-shelf sensors and microprocessor components to create a low cost and durable package that can be set up at any location using either Wifi or GSM connectivity."
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(HardwareHeader);

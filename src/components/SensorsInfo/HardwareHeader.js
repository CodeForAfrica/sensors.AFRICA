import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import HardwareHeaderContent from 'components/Header/JumboContent/HardwareHeaderContent';

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    paddingBottom: '2rem',
    backgroundColor: theme.palette.primary.light,
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      paddingTop: '2rem',
      height: 450,
    },
  },
}));

function HardwareHeader() {
  const classes = useStyles();
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

export default HardwareHeader;

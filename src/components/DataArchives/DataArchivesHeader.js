import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import DataArchivesHeaderContent from 'components/Header/JumboContent/DataArchivesHeaderContent';

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450,
    },
  },
}));

function DataArchivesHeader() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <DataArchivesHeaderContent
          title="sensors.AFRICA DATA"
          subheading="Sensors data is collected and uploaded to our API archives every five minutes. The API accepts the sensor data and serves as the basis for the graphical display of maps used on the site. 
           "
        />
      </Grid>
    </Grid>
  );
}

export default DataArchivesHeader;

import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import DataArchivesHeaderContent from '../Header/JumbotronContent/DataArchivesHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450
    }
  }
});

function DataArchivesHeader({ classes }) {
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
        <DataArchivesHeaderContent
          title="sensors.AFRICA DATA"
          subheading="Sensors data is collected and uploaded to our API archives every five minutes. The API accepts the sensor data and serves as the basis for the graphical display of maps used on the site. 
          Find out more on how to access and use this data. "
        />
      </Grid>
    </Grid>
  );
}

DataArchivesHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataArchivesHeader);

import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import AboutHeaderContent from '../Header/JumbotronContent/AboutHeaderContent';

const styles = {
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    height: 400,
    borderRadius: 'none'
  }
};

function AboutHeader({ classes }) {
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
        <AboutHeaderContent
          title="About Sensors.AFRICA"
          subheading="sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities.The initiative was seed-funded by innovateAFRICA, and is being incubated by Code For Africa"
        />
      </Grid>
    </Grid>
  );
}

AboutHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutHeader);

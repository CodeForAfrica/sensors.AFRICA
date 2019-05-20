import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import AboutHeaderContent from '../Header/JumbotronContent/AboutHeaderContent';

const styles = theme => ({
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#424143',
    borderRadius: 'none',
    [theme.breakpoints.up('md')]: {
      height: 450
    }
  },
  link: {
    paddingRight: '0.2rem',
    paddingLeft: '0.2rem',
    color: 'white'
  }
});

function AboutHeader({ classes }) {
  return (
    <Grid
      container
      className={classes.jumbotron}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <MenuBar alwaysActive showMenu={false} />
      </Grid>
      <Grid item xs={12}>
        <AboutHeaderContent
          title="ABOUT sensors.AFRICA"
          subheading={[
            'sensors.AFRICA is a pan-African citizen science initiative that uses sensors to monitor air, water and sound pollution to give citizens actionable information about their cities. ',
            'The air quality sensors use open source technology from the',
            <a href="https://luftdaten.info/" className={classes.link}>
              Luftdaten project
            </a>,
            '. The initiative was seed-funded by innovateAFRICA and is being incubated by Code for Africa'
          ]}
        />
      </Grid>
    </Grid>
  );
}

AboutHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutHeader);

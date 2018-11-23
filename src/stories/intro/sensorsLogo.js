import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import storybookLogo from '../../assets/images/storybook/storybookLogoBlack.png';

const styles = theme => ({
  root: {
    paddingBottom: 0
  },
  img: {
    maxWidth: '100%',
    height: 'auto'
  }
});

function SensorsLogo({ classes }) {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <img src={storybookLogo} alt="Sensors Logp" className={classes.img} />
    </Grid>
  );
}

SensorsLogo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(SensorsLogo);

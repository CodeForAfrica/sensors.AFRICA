import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SensorsLogo from './sensorsLogo';

const styles = theme => ({
  root: {
    color: 'blue',
    height: '100%',
    padding: 0
  },
  gridBody: {},
  bodyCopy: {
    paddingTop: 0
  }
});

function Intro({ classes }) {
  return (
    <Grid container item xs={12} className={classes.root}>
      <Grid item xs={12} direction="row" justify="center" alignItems="center">
        <SensorsLogo />
        <div
          container
          item
          xs={8}
          direction="row"
          justify="center"
          alignItems="center"
          style={{ paddingRight: '25%', paddingLeft: '25%' }}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, eos id ridens expetenda evertitur. Vix
            magna zril bonorum ei, quando utroque offendit sea in. Eripuit
            percipit assentior ea cum, dolores ocurreret concludaturque ad eam.
            An vim consul bonorum eligendi. Eam ea unum liberavisse, in stet
            dicam tincidunt ius. Ea quo homero consulatu sententiae, in duis
            adipiscing inciderint sit, eos autem perpetua ei. An dictas ornatus
            deserunt usu, at labore commune suavitate usu. Sit congue legere ad.
            Maiorum appareat mel ne, qui no justo ornatus interpretaris. Cetero
            complectitur ad mel.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

Intro.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Intro);

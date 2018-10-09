import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import JoinNetworkContent from '../Header/JumbotronContent/JoinHeaderContent';

const styles = {
  jumbotron: {
    flexGrow: 1,
    backgroundColor: '#2FB56B',
    height: 400,
    borderRadius: 'none'
  }
};

function JoinHeader({ classes }) {
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
        <JoinNetworkContent
          title="JOIN THE NETWORK"
          subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam ut purus quis massa interdum egestas quis id velit.
                            Proin non nisi porta sem placerat blandit in eget turpis.
                            Quisque faucibus auctor ligula et posuere. Vestibulum ultrices lobortis
                            turpis eu vulputate"
        />
      </Grid>
    </Grid>
  );
}

JoinHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinHeader);

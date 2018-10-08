import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import MenuBar from '../Header/MenuBar';
import JoinNetworkContent from '../Header/JumbotronContent/JoinHeaderContent';

const styles = {
  jumbotron: {
    backgroundColor: '#2FB56B',
    height: '400px',
    borderRadius: 'none'
  }
};

function JoinHeader({ classes }) {
  return (
    <Grid className={classes.jumbotron}>
      <MenuBar />
      <JoinNetworkContent
        title="JOIN THE NETWORK"
        subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam ut purus quis massa interdum egestas quis id velit.
                            Proin non nisi porta sem placerat blandit in eget turpis.
                            Quisque faucibus auctor ligula et posuere. Vestibulum ultrices lobortis
                            turpis eu vulputate"
      />
    </Grid>
  );
}

JoinHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinHeader);

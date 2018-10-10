import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Navbar from '../../components/Header/Navbar';
import JoinHeader from '../../components/JoinNetwork/JoinHeader';
import Support from '../../components/Support';
import Footer from '../../components/Footer';
import backgroundImage from '../../assets/images/background/bgsupport.jpg';

const styles = theme => ({
  joinNetworkSupport: {
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 5,
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('md')]: {
      height: '40rem',
      alignItems: 'center'
    }
  }
});

function JoinNetwork({ classes }) {
  return (
    <React.Fragment>
      <Navbar />
      <JoinHeader />
      <Support classNames={classes.joinNetworkSupport} />
      <Footer />
    </React.Fragment>
  );
}

JoinNetwork.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JoinNetwork);

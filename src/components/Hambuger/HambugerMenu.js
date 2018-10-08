import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { List, MenuItem, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

import MenuButton from './MenuButton';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  list: {
    color: 'white'
  },
  modalContent: {
    margin: 'auto',
    padding: '20px',
    width: '40%',
    height: 'auto',
    position: 'fixed',
    top: '15%',
    left: '80%'
  },
  typography: {
    color: '#fff'
  },
  link: {
    textDecoration: 'none'
  }
});

class HambugerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ menuOpen: true });
  }

  handleClose() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { classes } = this.props;
    const { menuOpen } = this.state;

    return (
      <div>
        <MenuButton
          open={menuOpen}
          onClick={() => this.handleOpen()}
          onClose={this.handleClose}
        />
        <Modal
          className={classes.modalContent}
          open={menuOpen}
          onClose={this.handleClose}
          disableAutoFocus
        >
          <List
            container
            item
            xs={3}
            direction="column"
            justify="center"
            alignItems="flex-end"
          >
            <Link to="/air/home" className={classes.link}>
              <MenuItem>
                <Typography className={classes.typography} variant="subheading">
                  HOME
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/about" className={classes.link}>
              <MenuItem>
                <Typography className={classes.typography} variant="subheading">
                  ABOUT
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/how-sensors-work" className={classes.link}>
              <MenuItem>
                <Typography className={classes.typography} variant="subheading">
                  HOW SENSORS WORK
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/city" className={classes.link}>
              <MenuItem>
                <Typography className={classes.typography} variant="subheading">
                  CITY
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/join-network" className={classes.link}>
              <MenuItem>
                <Typography className={classes.typography} variant="subheading">
                  JOIN
                </Typography>
              </MenuItem>
            </Link>
          </List>
        </Modal>
      </div>
    );
  }
}

HambugerMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HambugerMenu);

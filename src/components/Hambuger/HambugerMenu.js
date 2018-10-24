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
    color: 'white',
  },
  listItem: {
    color: 'white',
    textAlign: 'right',
  },

  modalContent: {
    margin: 'auto',
    padding: '20px',
    height: 'auto',
    top: '13%',
    left: '0%',
    [theme.breakpoints.up('md')]: {
      width: '20%',
      left: '80%'
    }
  },
  typography: {
    color: '#fff',
    textAlign: 'right'
  },
  link: {
    textDecoration: 'none',
  }
});

class HambugerMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
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
          >
            <Link to="/air" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  STORIES
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/about" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  RESOURCES
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/how-sensors-work" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  DATA
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/join-network" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  JOIN
                </Typography>
              </MenuItem>
            </Link>

            <Link to="/air/join-network" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  ABOUT
                </Typography>
              </MenuItem>
            </Link>
            <Link to="/air/join-network" className={classes.link}>
              <MenuItem className={classes.listItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  CONTACT
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

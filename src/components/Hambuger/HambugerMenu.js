import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { List, MenuItem, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

import { URLS } from '../DocumentHead/PageHeads';

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
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      paddingRight: '45%'
    }
  },
  listItem: {
    color: 'white',
    display: 'block',
    height: '18px'
  },

  modalContent: {
    margin: 'auto',
    padding: '20px',
    height: 'auto',
    top: '6%',
    left: '0%',
    [theme.breakpoints.up('md')]: {
      width: '25%',
      left: '75%'
    },
    [theme.breakpoints.up('xl')]: {
      top: '4%'
    }
  },
  typography: {
    color: '#fff',
    textAlign: 'right',
    fontWeight: '700'
  },
  link: {
    textDecoration: 'none'
  }
});

function HambugerMenu({ classes, handleToggle, menuOpen }) {
  return (
    <div>
      <MenuButton
        open={menuOpen}
        onClick={handleToggle}
        onClose={handleToggle}
      />
      <Modal
        className={classes.modalContent}
        open={menuOpen}
        onClose={handleToggle}
        disableAutoFocus
      >
        <List container item xs={3} direction="column" className={classes.list}>
          <a
            href="https://medium.com/code-for-africa/tagged/innovateafrica"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem className={classes.listItem}>
              <Typography className={classes.typography} variant="subtitle1">
                STORIES
              </Typography>
            </MenuItem>
          </a>

          <a
            href="https://archive.sensors.africa/"
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MenuItem className={classes.listItem}>
              <Typography className={classes.typography} variant="subtitle1">
                DATA
              </Typography>
            </MenuItem>
          </a>

          <Link to={URLS.AIR.JOIN} className={classes.link}>
            <MenuItem className={classes.listItem}>
              <Typography className={classes.typography} variant="subtitle1">
                JOIN
              </Typography>
            </MenuItem>
          </Link>

          <Link to={URLS.AIR.ABOUT} className={classes.link}>
            <MenuItem className={classes.listItem}>
              <Typography className={classes.typography} variant="subtitle1">
                ABOUT
              </Typography>
            </MenuItem>
          </Link>

          <Link to={URLS.AIR.IMPACT} className={classes.link}>
            <MenuItem className={classes.listItem}>
              <Typography className={classes.typography} variant="subtitle1">
                RESOURCES
              </Typography>
            </MenuItem>
          </Link>

          <Link to={URLS.AIR.JOIN} className={classes.link}>
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

HambugerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(HambugerMenu);

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid, MenuItem, Typography, MenuList } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';

import { URLS } from '../DocumentHead/PageHeads';

import MenuButton from './MenuButton';

const styles = theme => ({
  grid: {
    flex: 1
  },
  menuList: {
    color: 'white',
    marginTop: '8rem',
    textAlign: 'right',
    paddingRight: '2%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '2rem',
      paddingRight: '10%'
    }
  },
  menuListItem: {
    color: 'white',
    display: 'block',
    height: '18px'
  },
  modalContent: {
    margin: 'auto',
    padding: '20px',
    height: 'auto'
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
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <MenuButton
          open={menuOpen}
          onClick={handleToggle}
          onClose={handleToggle}
        />
      </Grid>
      <Grid item xs={12}>
        <Modal
          className={classes.modalContent}
          open={menuOpen}
          onClose={handleToggle}
          disableAutoFocus
        >
          <MenuList className={classes.menuList}>
            <a
              href="https://medium.com/code-for-africa/tagged/sensorsafrica"
              className={classes.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  STORIES
                </Typography>
              </MenuItem>
            </a>

            <Link to={URLS.AIR.DATA} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  DATA
                </Typography>
              </MenuItem>
            </Link>

            <Link to={URLS.AIR.JOIN} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  JOIN
                </Typography>
              </MenuItem>
            </Link>

            <Link to={URLS.AIR.ABOUT} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  ABOUT
                </Typography>
              </MenuItem>
            </Link>

            <Link to={URLS.AIR.IMPACT} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  RESOURCES
                </Typography>
              </MenuItem>
            </Link>

            <Link to={URLS.AIR.JOIN} className={classes.link}>
              <MenuItem className={classes.menuListItem}>
                <Typography className={classes.typography} variant="subtitle1">
                  CONTACT
                </Typography>
              </MenuItem>
            </Link>
          </MenuList>
        </Modal>
      </Grid>
    </Grid>
  );
}

HambugerMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  handleToggle: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired
};

export default withStyles(styles)(HambugerMenu);

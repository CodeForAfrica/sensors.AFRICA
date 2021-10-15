import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HamburgerMenu from 'components/Hambuger/HambugerMenu';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%',
    },
  },
  children: {
    [theme.breakpoints.only('xs')]: {
      position: 'absolute',
      top: '8rem',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
    },
  },
  icon: {
    color: 'white',
    paddingTop: '3%',
  },
  iconContainer: {
    // paddingTop: '2rem'
  },
});

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const { classes, showMenu } = this.props;
    const { menuOpen } = this.state;

    return (
      <Grid
        container
        className={classes.root}
        justify="flex-end"
        alignItems="center"
      >
        {showMenu && (
          <Grid item>
            <Grid className={classes.iconContainer}>
              <HamburgerMenu
                handleToggle={this.handleToggle}
                menuOpen={menuOpen}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    );
  }
}

MenuBar.propTypes = {
  showMenu: PropTypes.bool,
};

MenuBar.defaultProps = {
  showMenu: true,
};

export default withStyles(styles)(MenuBar);

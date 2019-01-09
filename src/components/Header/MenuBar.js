import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import HamburgerMenu from '../Hambuger/HambugerMenu';

import Logo from '../Logo';

const styles = theme => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      paddingRight: '8%',
      paddingLeft: '8%'
    }
  },
  icon: {
    color: 'white',
    paddingTop: '3%'
  },
  iconContainer: {
    paddingTop: '2rem'
  }
});

class MenuBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { menuOpen: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({ menuOpen: !prevState.menuOpen }));
  }

  render() {
    const { alwaysActive, children, classes, showMenu } = this.props;
    const { menuOpen } = this.state;
    const active = alwaysActive || menuOpen;
    const logo = (
      <Grid item>
        <Link to="/">
          <Logo active={active} />
        </Link>
      </Grid>
    );
    let leftComponent = logo;
    if (children) {
      leftComponent = (
        <Grid item>
          <Grid container alignItems="flex-start">
            {logo}
            <Grid item>{children}</Grid>
          </Grid>
        </Grid>
      );
    }
    return (
      <Grid
        container
        className={classes.root}
        justify="space-between"
        alignItems="flex-start"
      >
        {leftComponent}
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
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  showMenu: PropTypes.bool,
  alwaysActive: PropTypes.bool
};

MenuBar.defaultProps = {
  children: null,
  showMenu: true,
  alwaysActive: false
};

export default withStyles(styles)(MenuBar);

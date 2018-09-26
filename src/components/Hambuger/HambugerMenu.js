import React from "react";
import PropTypes from "prop-types";
import MenuButton from "../Hambuger/MenuButton";
import { withStyles } from "@material-ui/core/styles";
import { List, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  },
  list: {
    color: "white"
  },
  modalContent: {
    margin: "auto",
    padding: "20px",
    width: "40%",
    height: "auto",
    position: "fixed",
    top: "15%",
    left: "80%"
  },
  typography: {
    color: "#fff"
  },
  link: {
    textDecoration: "none"
  }
});

class HambugerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleOpen = () => {
    this.setState({ menuOpen: true });
  };

  handleClose = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MenuButton
          open={this.state.menuOpen}
          onClick={() => this.handleOpen()}
          onClose={this.handleClose}
        />
        <Modal
          className={classes.modalContent}
          open={this.state.menuOpen}
          onClose={this.handleClose}
          disableAutoFocus={true}
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

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React, { useState } from "react";

import HamburgerMenu from "@/sensorsafrica/components/Hambuger/HambugerMenu";

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    marginTop: -4,
    [breakpoints.up("md")]: {
      paddingRight: "8%",
      paddingLeft: "8%",
    },
  },
  children: {
    [breakpoints.only("xs")]: {
      position: "absolute",
      top: "8rem",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 3,
    },
  },
  icon: {
    color: "white",
    paddingTop: "3%",
  },
  iconContainer: {},
}));

function MenuBar({ showMenu, ...props }) {
  const classes = useStyles(props);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <Grid
      container
      className={classes.root}
      justifyContent="flex-end"
      alignItems="center"
    >
      {showMenu && (
        <Grid item>
          <Grid className={classes.iconContainer}>
            <HamburgerMenu handleToggle={handleToggle} menuOpen={menuOpen} />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

MenuBar.propTypes = {
  showMenu: PropTypes.bool,
};

MenuBar.defaultProps = {
  showMenu: true,
};

export default MenuBar;

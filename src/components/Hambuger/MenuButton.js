import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  container: {
    height: 32,
    width: 32,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    cursor: "pointer",
    padding: spacing(0.5),
    zIndex: "1301",
    position: "relative",
    [breakpoints.up("md")]: {
      marginLeft: 4,
      marginRight: 0,
    },
  },
}));

function MenuButton({ color, onClick, open, ...props }) {
  const classes = useStyles(props);

  const dynamicStyles = {
    line: {
      height: 4,
      width: 28,
      background: color,
      transition: "all 0.2s ease",
    },
    lineTop: {
      transform: open ? "rotate(45deg)" : "none",
      marginBottom: open ? "0" : "4px",
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
    },
    lineBottom: {
      transform: open ? "rotate(-45deg)" : "none",
      marginTop: open ? "-8px" : "4px",
    },
  };
  return (
    <div
      aria-label="Menu"
      className={classes.container}
      onClick={onClick}
      onKeyDown={onClick}
      role="button"
      tabIndex="0"
    >
      <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineTop }} />
      <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineMiddle }} />
      <div style={{ ...dynamicStyles.line, ...dynamicStyles.lineBottom }} />
    </div>
  );
}

MenuButton.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
  open: PropTypes.bool,
};

MenuButton.defaultProps = {
  color: "white",
  onClick: null,
  open: false,
};

export default MenuButton;

import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles({
  fullHeight: {
    display: "inline-block",
    margin: "0 auto",
    backgroundColor: "white",
  },
});

function KenyaMap({ title, src, height, width, frameBorder, scrolling }) {
  const classes = useStyles();
  return (
    <iframe
      title={title}
      key={src}
      src={src}
      height={height}
      width={width}
      frameBorder={frameBorder}
      className={classes.fullHeight}
      scrolling={scrolling}
    />
  );
}

KenyaMap.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string,
  frameBorder: PropTypes.string,
  scrolling: PropTypes.string,
};

KenyaMap.defaultProps = {
  height: "",
  width: "",
  frameBorder: "0",
  scrolling: "auto",
};
export default KenyaMap;

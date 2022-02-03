import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    margin: 0,
    position: "relative",
    maxWidth: "100%",
  },
}));

function Figure({ className, ...props }) {
  const classes = useStyles(props);

  return (
    <figure className={clsx(classes.root, className)}>
      <Image layout="fill" objectFit="contain" unoptimized {...props} />
    </figure>
  );
}

Figure.propTypes = {
  className: PropTypes.string,
};

Figure.defaultProps = {
  className: undefined,
};

export default Figure;

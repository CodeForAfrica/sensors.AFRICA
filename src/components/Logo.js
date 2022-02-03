import { Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";

import logowhite from "@/sensorsafrica/assets/images/logos/logowhite.png";
import Figure from "@/sensorsafrica/components/Figure";

const useStyles = makeStyles((theme) => ({
  defaultBadge: {
    zIndex: 1301,
    top: "5.8rem",
    right: "1.65rem",
    color: theme.palette.primary.dark,
    fontSize: theme.typography.caption.fontSize,
  },
  defaultActiveBadge: {
    zIndex: 1301,
    top: "5.8rem",
    right: "1.65rem",
    fontSize: theme.typography.caption.fontSize,
  },
  landingBadge: {
    zIndex: 1301,
    top: "7.175rem",
    right: "1.65rem",
    fontSize: theme.typography.caption.fontSize,
  },
  logo: {
    zIndex: 1301,
    position: "relative",
  },
  img: {
    width: 255,
    height: 100,
  },
}));

function Logo({ badge, active }) {
  const classes = useStyles();
  const activeStatus = active && badge === "default" ? "Active" : "";
  const imgClassName = clsx(classes.logo, classes.img);
  return (
    <Badge
      badgeContent="beta"
      classes={{ badge: classes[`${badge}${activeStatus}Badge`] }}
    >
      <Figure
        src={logowhite.src}
        alt="sensors.AFRICA"
        className={imgClassName}
      />
    </Badge>
  );
}

Logo.propTypes = {
  active: PropTypes.bool,
  badge: PropTypes.string,
};

Logo.defaultProps = {
  active: false,
  badge: "default",
};

export default Logo;

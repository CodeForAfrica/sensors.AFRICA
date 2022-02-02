import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";

import logo from "@/sensorsafrica/assets/images/logos/sensorsLogo.png";
import Figure from "@/sensorsafrica/components/Figure";
import ButtonLink from "@/sensorsafrica/components/Link/Button";

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
    height: 50,
    width: 50,
  },
}));

function IconLogo(props) {
  const classes = useStyles(props);
  const imgClassName = clsx(classes.logo, classes.img);

  return (
    <ButtonLink href="/">
      <Figure src={logo} alt="sensors.AFRICA" className={imgClassName} />
    </ButtonLink>
  );
}

export default IconLogo;

import { Button } from "@material-ui/core";
import clsx from "clsx";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React from "react";

import NextComposed from "./NextComposed";

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const ButtonLink = React.forwardRef(function ButtonLink(props, ref) {
  const {
    activeClassName = "active",
    className: classNameProps,
    href,
    naked,
    ...other
  } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName,
  });

  if (naked) {
    return (
      <NextComposed className={className} href={href} ref={ref} {...other} />
    );
  }

  return (
    <Button
      component={NextComposed}
      className={className}
      href={href}
      ref={ref}
      {...other}
    />
  );
});

ButtonLink.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
};

ButtonLink.defaultProps = {
  activeClassName: undefined,
  as: undefined,
  className: undefined,
  href: undefined,
  innerRef: undefined,
  naked: undefined,
  onClick: undefined,
  prefetch: undefined,
};

export default ButtonLink;

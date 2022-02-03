import NextLink from "next/link";
import PropTypes from "prop-types";
import React from "react";

const NextComposed = React.forwardRef(function NextComposed(props, ref) {
  const {
    as,
    component,
    href,
    locale,
    passHref,
    prefetch,
    replace,
    scroll,
    shallow,
    ...other
  } = props;
  const Component = component || "a";
  return (
    <NextLink
      href={href}
      as={as}
      passHref={passHref}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <Component ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  component: PropTypes.elementType,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  locale: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  passHref: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
};

NextComposed.defaultProps = {
  as: undefined,
  component: undefined,
  href: undefined,
  locale: undefined,
  passHref: undefined,
  prefetch: undefined,
  replace: undefined,
  scroll: undefined,
  shallow: undefined,
};

export default NextComposed;

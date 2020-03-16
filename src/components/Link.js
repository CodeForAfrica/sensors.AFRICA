import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef((props, ref) => {
  const { as, href, prefetch, ...other } = props;

  return (
    <NextLink href={href} prefetch={prefetch} as={as}>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a ref={ref} {...other} />
    </NextLink>
  );
});

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool
};

NextComposed.defaultProps = {
  as: undefined,
  href: undefined,
  prefetch: undefined
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function Link(props) {
  const {
    activeClassName = 'active',
    className: classNameProps,
    href,
    innerRef,
    naked,
    ...other
  } = props;
  const router = useRouter();

  const className = classNames(classNameProps, {
    [activeClassName]: router.pathname === href && activeClassName
  });

  if (naked) {
    return (
      <NextComposed
        className={className}
        href={href}
        ref={innerRef}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      href={href}
      ref={innerRef}
      {...other}
    />
  );
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  naked: PropTypes.bool,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool
};

Link.defaultProps = {
  activeClassName: undefined,
  as: undefined,
  className: undefined,
  href: undefined,
  innerRef: undefined,
  naked: undefined,
  onClick: undefined,
  prefetch: undefined
};

export default React.forwardRef((props, ref) => (
  <Link {...props} innerRef={ref} />
));

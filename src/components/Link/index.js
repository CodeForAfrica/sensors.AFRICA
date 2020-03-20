/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { useRouter } from 'next/router';

import MuiLink from '@material-ui/core/Link';

import NextComposed from './NextComposed';

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

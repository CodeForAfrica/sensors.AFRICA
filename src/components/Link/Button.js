import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { useRouter } from 'next/router';

import Button from '@material-ui/core/Button';

import NextComposed from './NextComposed';

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
function ButtonLink(props) {
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
    [activeClassName]: router.pathname === href && activeClassName,
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
    <Button
      component={NextComposed}
      className={className}
      href={href}
      ref={innerRef}
      {...other}
    />
  );
}

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

export default React.forwardRef((props, ref) => (
  <ButtonLink {...props} innerRef={ref} />
));

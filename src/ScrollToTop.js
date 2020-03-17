import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/link';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({})
};

ScrollToTop.defaultProps = {
  children: null
};

export default withRouter(ScrollToTop);

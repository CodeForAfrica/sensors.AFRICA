import { withRouter } from "next/link";
import PropTypes from "prop-types";
import { useEffect } from "react";

function ScrollToTop({ children, location }) {
  useEffect((prevProps) => {
    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  });

  return children;
}

ScrollToTop.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.shape({}),
};

ScrollToTop.defaultProps = {
  children: null,
};

export default withRouter(ScrollToTop);

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PageHeads from './PageHeads';
import Favicon from '../Favicon';

function DocumentHead({ url }) {
  const matchUrl = obj => obj.url === url;
  const matchDefault = obj => obj.url === '/';
  const head =
    (url && PageHeads.find(matchUrl)) || PageHeads.find(matchDefault);

  return (
    <React.Fragment>
      <Helmet>
        <title>{head.title}</title>
      </Helmet>
      <Favicon color={head.color} />
    </React.Fragment>
  );
}

DocumentHead.propTypes = {
  url: PropTypes.string
};

DocumentHead.defaultProps = {
  url: null
};

export default DocumentHead;

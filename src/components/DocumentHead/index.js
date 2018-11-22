import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import PageHeads from './PageHeads';

function DocumentHead({ url }) {
  const matchUrl = obj => obj.url === url;
  const matchDefault = obj => obj.url === '/';
  const head = PageHeads.find(matchUrl) || PageHeads.find(matchDefault);

  return (
    <Helmet>
      <title>{head.title}</title>
    </Helmet>
  );
}

DocumentHead.propTypes = {
  url: PropTypes.string.isRequired
};

export default DocumentHead;

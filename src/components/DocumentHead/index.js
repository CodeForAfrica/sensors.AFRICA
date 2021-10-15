import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';

import PageHeads, { URLS } from 'components/DocumentHead/PageHeads';
import Favicon from 'components/Favicon';

function DocumentHead({ url }) {
  const matchUrl = (obj) => obj.url === url;
  const matchDefault = (obj) => obj.url === '/';
  const head =
    (url && PageHeads.find(matchUrl)) || PageHeads.find(matchDefault);

  return (
    <>
      <Helmet>
        <title>{head.title}</title>
      </Helmet>
      <Favicon color={head.color} />
    </>
  );
}

DocumentHead.propTypes = {
  url: PropTypes.string,
};

DocumentHead.defaultProps = {
  url: null,
};

export { URLS };
export default DocumentHead;

import React from 'react';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import Meta from './Meta';

const Seo = props => {
  let content = _.find(Meta, { url: props.url });
  if (!content) {
    content = _.find(Meta, { url: 'landing' });
  }
  return (
    <Helmet>
      <title>{content.title}</title>
    </Helmet>
  );
};
export default Seo;

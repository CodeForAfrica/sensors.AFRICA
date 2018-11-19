import React from 'react';
import { Helmet } from 'react-helmet';

function GreenFavicon() {
  return (
    <div>
      <Helmet
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `/favicons/green/apple-touch-icon.png?v=rMqL8kY7kj`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `favicons/green/favicon-32x32.png?v=rMqL8kY7kj`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `favicons/green/favicon-16x16.png?v=rMqL8kY7kj`
          },
          {
            rel: 'mask-icon',
            color: '#2fb56b',
            href: `/favicons/green/safari-pinned-tab.svg?v=rMqL8kY7kj`
          },
          {
            rel: 'manifest',
            href: `favicons/green/manifest.json?v=rMqL8kY7kj`
          }
        ]}
        meta={[
          {
            name: 'apple-mobile-web-app-title',
            content: 'sensors.AFRICA'
          },
          {
            name: 'application-name',
            content: 'sensors.AFRICA'
          },
          {
            name: 'msapplication-TileColor',
            content: '#2fb56b'
          },
          {
            name: 'msapplication-config',
            content: 'favicons/green/browserconfig.xml?v=rMqL8kY7kj'
          }
        ]}
      />
    </div>
  );
}

export default GreenFavicon;

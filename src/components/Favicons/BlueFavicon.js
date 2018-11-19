import React from 'react';
import { Helmet } from 'react-helmet';

function BlueFavicon() {
  return (
    <div>
      <Helmet
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `favicons/blue/apple-touch-icon.png?v=7koK7WaNmA`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `favicons/blue/favicon-32x32.png?v=7koK7WaNmA`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `favicons/blue/favicon-16x16.png?v=7koK7WaNmA`
          },
          {
            rel: 'mask-icon',
            color: '#4972b8',
            href: `favicons/blue/safari-pinned-tab.svg?v=7koK7WaNmA`
          },
          {
            rel: 'manifest',
            href: `favicons/blue/manifest.json?v=7koK7WaNmA`
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
            content: '#4972b8'
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

export default BlueFavicon;

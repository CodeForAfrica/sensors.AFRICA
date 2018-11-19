import React from 'react';
import { Helmet } from 'react-helmet';

function BlackFavicon() {
  return (
    <div>
      <Helmet
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `/favicons/black/apple-touch-icon.png?v=M4mLgJ32PJ`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `/favicons/black/favicon-32x32.png?v=M4mLgJ32PJ`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `favicons/black/favicon-16x16.png?v=M4mLgJ32PJ`
          },
          {
            rel: 'mask-icon',
            color: '#424143',
            href: `/favicons/black/safari-pinned-tab.svg?v=M4mLgJ32PJ`
          },
          {
            rel: 'manifest',
            href: `favicons/black/manifest.json?v=M4mLgJ32PJ`
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
            content: '#424143'
          },
          {
            name: 'msapplication-config',
            content:
              '/assets/images/favicons/black/browserconfig.xml?v=M4mLgJ32PJ'
          }
        ]}
      />
    </div>
  );
}

export default BlackFavicon;

import React from 'react';
import { Helmet } from 'react-helmet';

function PurpleFavicon() {
  return (
    <div>
      <Helmet
        link={[
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `/favicons/purple/apple-touch-icon.png?v=ng9qR2KowR`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `/favicons/purple/favicon-32x32.png?v=ng9qR2KowR`
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `/favicons/purple/favicon-16x16.png?v=ng9qR2KowR`
          },
          {
            rel: 'mask-icon',
            color: '#b64598',
            href: `/favicons/purple/safari-pinned-tab.svg?v=ng9qR2KowR`
          },
          {
            rel: 'manifest',
            href: `/favicons/purple/manifest.json?v=ng9qR2KowR`
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
            content: '#b64598'
          },
          {
            name: 'msapplication-config',
            content: '/favicons/purple/browserconfig.xml?v=ng9qR2KowR'
          }
        ]}
      />
    </div>
  );
}

export default PurpleFavicon;

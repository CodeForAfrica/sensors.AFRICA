const withImages = require('next-images');

module.exports = withImages({
  webpack(config, { isServer }) {
    // Important: return the modified config

    // https://github.com/jsoma/tabletop/issues/158
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.externals = ['tls', 'net', 'fs'];
    }
    return config;
  },
});

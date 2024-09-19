const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      moduleDirectories: ['node_modules', 'components'],
    };
    return config;
  },
};
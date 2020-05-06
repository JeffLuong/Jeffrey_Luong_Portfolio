const webpack = require('webpack');

const config = require('./webpack.config.js');

module.exports = {
  ...config,
  mode: 'production',
  plugins: (config.plugins || []).concat([
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
};

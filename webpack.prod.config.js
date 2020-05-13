const webpack = require('webpack');

const config = require('./webpack.config.js');

module.exports = {
  ...config,
  mode: 'production',
  plugins: (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true })
  ])
};

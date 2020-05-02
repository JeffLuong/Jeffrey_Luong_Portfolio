const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'static/build'),
    filename: '[name].js',
    publicPath: '/static/build'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  resolve: {
    extensions: ['.js', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.((sc|c)ss)$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true } },
          'sass-loader'
        ]
      }
    ]
  }
};
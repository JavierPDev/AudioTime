var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('./src'),
  entry: {
    app: './index'
  },
  module: {
    preloaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};

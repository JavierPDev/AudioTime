var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve('./src/js'),
  entry: {
    app: './index',
    vendor: [
      'angular',
      'angular-foundation/mm-foundation.js',
      'angular-ui-router/release/angular-ui-router.js',
      'foundation-sites/css/normalize.css',
      'foundation-sites/css/foundation.css'
    ]
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
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader'
        )
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!autoprefixer-loader!sass-loader'
        )
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: 'index.html',
      inject: 'body',
      hash: true
    }),
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};

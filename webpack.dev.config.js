var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config');

config.output = {
  path: './dist/',
  publicPath: '/',
  filename: 'bundle.js'
};

config.devServer = {
  contentBase: 'dist',
  historyApiFallback: true
};

// Output sourcemaps
config.devtool = 'source-map';
config.module.loaders.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?sourceMap!autoprefixer-loader!sass-loader?sourceMap'
  )
});

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader!autoprefixer-loader'
  )
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;

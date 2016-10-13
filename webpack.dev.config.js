var path = require('path');
var webpack = require('webpack');
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
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;

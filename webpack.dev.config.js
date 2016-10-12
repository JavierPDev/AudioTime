var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');

config.output = {
  path: './dist/',
  publicPath: '/',
  filename: '[name].bundle.js'
};
config.devServer = {
  contentBase: 'dist'
};
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;

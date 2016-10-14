var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = require('./webpack.config');

config.output = {
  path: './dist/',
  filename: 'bundle.js'
};
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?minimize!autoprefixer-loader'
  )
});
config.module.loaders.push({
  test: /\.scss$/,
  exclude: /node_modules/,
  loader: ExtractTextPlugin.extract(
    'style-loader',
    'css-loader?minimize!autoprefixer-loader!sass-loader'
  )
});
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  mangle: {
    // You can specify all variables that should not be mangled.
    // For example if your vendor dependency doesn't use modules
    // and relies on global variables. Most of angular modules relies on
    // angular global variable, so we should keep it unchanged
    except: ['$super', '$', 'exports', 'require', 'angular']
  }
}));

module.exports = config;

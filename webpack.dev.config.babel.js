import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config from './webpack.config.babel';

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

config.module.loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'ng-annotate!babel-loader!eslint-loader'
});

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;

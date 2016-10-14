import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import config from './webpack.config.babel';

config.output = {
  path: './dist/',
  filename: 'bundle.js'
};

// Minify css
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

// Minify js without mangling globals
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  mangle: {
    // You can specify all variables that should not be mangled.
    // For example if your vendor dependency doesn't use modules
    // and relies on global variables. Many angular modules relie on
    // angular global variable, so we should keep it unchanged
    except: ['$super', '$', 'exports', 'require', 'angular']
  }
}));

module.exports = config;

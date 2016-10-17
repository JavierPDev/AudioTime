import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
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
      favicon: 'favicon.ico',
      inject: 'body',
      hash: true
    }),
    new ExtractTextPlugin('bundle.css')
  ]
};

import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  context: path.resolve('./src'),
  entry: {
    app: './index'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw-loader'
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

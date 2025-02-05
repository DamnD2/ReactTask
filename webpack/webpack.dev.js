const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const commonPaths = require('./paths');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: '[name].js',
    path: commonPaths.outputPath,
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              localsConvention: 'camelCase'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    port: 9020
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv()
  ]
};

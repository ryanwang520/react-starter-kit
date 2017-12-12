const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  dependencies: ['vendor'],
  plugins: [
    new CleanWebpackPlugin(['build']),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, 'dll/manifest.json'),
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'public/index.html',
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/vendor**.js'),
      includeSourcemap: true,
      hash: true,
    }),
  ],
  output: {
    publicPath: '',
  },
})

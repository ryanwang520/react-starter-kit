const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
  },
  output: { publicPath: '/' },
  plugins: [new ErrorOverlayPlugin()],
})

const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    contentBase: './build',
    hot: true,
    historyApiFallback: true,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: { publicPath: '/' },
})

const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  name: 'vendor',
  entry: ['react', 'react-dom'],
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: 'vendor_[hash].dll.js',
    library: 'vendor_[hash]',
  },
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin(['dll']),
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DllPlugin({
      name: 'vendor_[hash]',
      path: path.resolve(__dirname, 'dll/manifest.json'),
    }),
  ],
}

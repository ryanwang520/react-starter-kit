const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  name: 'vendor',
  entry: {
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name]_[hash].js',
    library: '[name]_[hash]',
  },
  plugins: [
    new CleanWebpackPlugin(['dll']),
    new webpack.DllPlugin({
      name: '[name]_[hash]',
      path: path.resolve(__dirname, 'dll/manifest.json'),
    }),
  ],
}

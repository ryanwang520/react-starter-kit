const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const pkg = require(path.join(process.cwd(), 'package.json'))

module.exports = {
  name: 'vendor',
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  devtool: 'sourcemap',
  output: {
    path: path.resolve(__dirname, 'dll'),
    filename: '[name].[hash:8].js',
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

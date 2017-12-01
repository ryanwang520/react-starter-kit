const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill', 'react-hot-loader/patch', './src/index.js'],
  dependencies: ['vendor'],
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.resolve(__dirname, 'dll/manifest.json'),
    }),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: 'assets/index.html',
    }),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './dll/*.dll.js'),
      // includeSourcemap: false,
      hash: true,
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
}

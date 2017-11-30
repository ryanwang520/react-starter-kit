const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        //test: /\.js$/,
        //exclude: /node_modules/,
        //use: {
          //loader: 'babel-loader',
        //}
      },{
        test: require.resolve('./src/index.js'),
        use: 'imports-loader?this=>window'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      //_: 'lodash'
      join: ['lodash', 'join']
    })
  ]

}


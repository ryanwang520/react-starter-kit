const path = require('path')

module.exports = {
  entry: {
    //index: ['babel-polyfill', './src/index.js'],
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'bundle.js',
    filename: '[name].bundle.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }

      }
    ]
  }

}


var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/main',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: { path: __dirname, filename: 'bundle.js' },
  debug: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // devServer: {
  //   contentBase: "./src"
  // }
};

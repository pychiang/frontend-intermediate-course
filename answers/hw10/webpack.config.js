var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader' // npm install json-loader
      }
    ]
  },

  plugins: [
    new UglifyJsPlugin() // uglifyJS
  ]
};

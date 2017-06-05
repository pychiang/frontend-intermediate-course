var webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
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
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery" // npm install jquery
       })
    ]
}
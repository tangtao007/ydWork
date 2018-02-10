var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
module.exports = {
  entry: {
    one: "./src/scripts/one.js",
    two: "./src/scripts/two.js",
  },
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename:"[name].[chunkhash:8]js"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common']
    })
  ]
}
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: {
    react:['react','react-redux'],
    one: "./src/scripts/one.js",
    two: "./src/scripts/two.js",
    common:['jquery','lodash']
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
      name: ['react','common'], // 用于提取manifest
      minChunks:Infinity
    }),
    new ExtractTextPlugin("[name].[contenthash:8].css"),
    new WebpackMd5Hash(),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin()
  ]
}
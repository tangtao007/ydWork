const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    'index': './assets/scripts/index.es'
  },
  output: {
    path: path.join(__dirname, './assets/'),
    publicPath: './',
    filename: 'scripts/[name].bundle.js'
  },
  module: {
    rules: [{
        test: /\.es$/,
        use: [{
          loader: "babel-loader",
          options: {
            "presets": [[
              'es2015',{
                module: false
              }],"stage-0"
            ]
          }
        }]
      },
      {
        test: /\.less$/i,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader'
          }]
        })
      }
    ]
  },
  externals:{
    jquery: 'window.$'
  },
  plugins: [
    new ExtractTextPlugin("styles/[name].css"),
    // 提取公共代码
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'scripts/[name].js',
      minChunks: 2 // 引入的
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    })
  ]
}
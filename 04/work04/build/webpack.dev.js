var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    index:[
      path.join(__dirname,'../src/public/scripts/indexPraise.es'),
      path.join(__dirname,'../src/public/scripts/addnum.js')
    ],
    tags:[
      path.join(__dirname,'../src/public/scripts/tag.es')
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 排除
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "stage-0",
              ["env", {
                "useBuiltIns": true,
                "targets": {
                  "browsers": ["last 2 versions", "safari >= 7"]
                },
                "node": "current"
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  output: {
    path: path.join(__dirname,'../dist/'),
    filename:"./public/scripts/[name]-[hash:5].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV:'dev'
      }
    }),
    new LiveReloadPlugin({appendScriptTag:true}),
    new ExtractTextPlugin("./public/styles/[name]-[hash:5].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './public/scripts/common/[name]-[hash:5].min.js'
    }),
    new HtmlWebpackPlugin({
      filename:'./views/layout.html',
      template:'src/widget/layout.html', // 从根目录开始
      inject:false
     }),
    new HtmlWebpackPlugin({
      filename:'./widget/layout.html',
      template:'src/widget/layout.html', // 从根目录开始
      inject:false
     }),
    new HtmlWebpackPlugin({
     filename:'./views/index.html',
     template:'src/views/index.js',// 从根目录开始
     inject:false,
     chunks:['vendor','index','tags']
    }),
    new HtmlWebpackPlugin({
      filename:'./widget/index.html',
      template:'src/widget/index.html',
      inject:false, // 从根目录开始
     })
  ]
}
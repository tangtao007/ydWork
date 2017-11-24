var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTML
module.exports = {
  entry: __dirname + "/src/scripts/app.js",
  output:{
    path: __dirname + "/build",
    filename:"./scripts/[name]-[hash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/index.htm'
    })
  ],
  module: {
    //加载器配置
    loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
},
  //其它解决方案配置
  resolve: {
    extensions: ['', '.js', '.css'], 
  }
}
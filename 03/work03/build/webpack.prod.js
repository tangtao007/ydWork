var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    index: [
      path.join(__dirname, '../public/scripts/indexPraise.js'),
      path.join(__dirname, '../public/scripts/addnum.js')
    ],
    tags: [
      path.join(__dirname, '../public/scripts/tag.js')
    ]
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "stage-0", ["env", {
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
    path: path.join(__dirname, '../dist/'),
    filename: "./public/scripts/[name]-[hash:5].js"
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: 'prod'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("./public/styles/[name]-[hash:5].css"),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: {removeAll: true } },
      canPrint: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: './public/scripts/common/[name]-[hash:5].min.js'
    })
  ]
}
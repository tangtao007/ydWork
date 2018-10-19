const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require('webpack-merge');
const _mode = argv.mode || "development";
const _modelflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var DashboardPlugin = require('webpack-dashboard/plugin');
const setTitle = require('node-bash-title');

setTitle("Webpack cmd");
const PurifyCSSPlugin = require('purifycss-webpack');
const glob = require('glob');
const {
  join
} = require('path');
const setIterm2Badge = require('set-iterm2-badge');
setIterm2Badge("开发环境");
webpackConfig = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        //'style-loader', 
        {
          //loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
          loader: 'css-loader'
        }
      ]
    }]
  },
  devServer:{
    // port:3000,
    // hot:true,
    before(app){
      app.get("/api/test",(req,res)=>{
        res.json({
          code:200,
          message:"Hello World"
        })
      })
    }
  },
  optimization:{
    splitChunks:{
      cacheGroups:{
        common:{
          chunks:"initial",
          name:"common",
          minChunks:1,
          maxInitialRequests:5,
          minSize:0
        }
      }
    },
    runtimeChunk:{
      name:"runtime"
    }
  },
  plugins: [
    new DashboardPlugin(),
    new ProgressBarPlugin(),
    new WebpackBuildNotifierPlugin({
      title: "Webpack success!",
      //logo: path.resolve("./img/favicon.png"),
      suppressSuccess: true
    }),
    new WebpackDeepScopeAnalysisPlugin(),
    new MiniCssExtractPlugin({
      filename: _modelflag?'styles/[name].[hash:5].css':"styles/[name].css",
      chunkFilename: _modelflag?'style/[id].[hash:5].css':"style/[id].css",
    }),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"src/index.html"
    }),
    new CleanWebpackPlugin(["dist"]),
    // new PurifyCSSPlugin({
    //   // Give paths to parse for rules. These should be absolute!
    //   paths: glob.sync(join(__dirname, './dist/*.html')),
    // })
  ],
}

module.exports = smp.wrap(merge(_mergeConfig, webpackConfig));
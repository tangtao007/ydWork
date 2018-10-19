const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


const os = require('os');
module.exports = {
  output:{
    filename: "scripts/[name].[hash:5].bundles.js",
    publicPath: "/"
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      //parallel: true
      parallel: os.cpus().length - 1
    })]
  }
}
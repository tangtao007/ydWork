var webpack = require('webpack');
module.exports = {
  entry: __dirname + "/src/scripts/app.js",
  output:{
    path: __dirname + "/build/scripts",
    filename:"[name]-[hash].js"
  }
}
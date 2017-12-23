var devWebpack = require('./build/webpack.dev.js');
var prodWebpack = require('./build/webpack.prod.js');
switch(process.env.NODE_ENV){
  case 'dev':
    module.exports = devWebpack;
    break;
  case 'prod':
    module.exports = prodWebpack;
    break;
  default:
}
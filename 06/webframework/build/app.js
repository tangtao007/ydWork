'use strict';

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

var _env = require('./config/env');

var _env2 = _interopRequireDefault(_env);

var _main = require('./config/main');

var _main2 = _interopRequireDefault(_main);

var _awilix = require('awilix');

var _awilixKoa = require('awilix-koa');

var _ErrorHandler = require('./Middlewares/ErrorHandler');

var _ErrorHandler2 = _interopRequireDefault(_ErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 开发环境所有配置
_env2.default.init();
const app = new _koa2.default();
// 灵魂IOC容器
const container = (0, _awilix.createContainer)();
var co = require('co');

// 关键点 将所有的container的service 服务到每一个路由中去 DI
// 先把所有的service注册到容器里面来
container.loadModules([['models/*.js', { register: _awilix.asClass }]], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: _awilix.Lifetime.SCOPED
  }
});
app.context.render = co.wrap((0, _koaSwig2.default)({
  root: _main2.default.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false,
  varControls: ['[[', ']]']
}));
//!!! Service中心注入到对应的Controller中心去
app.use((0, _awilixKoa.scopePerRequest)(container));
_log4js2.default.configure({
  appenders: { ydlog: { type: 'file', filename: './logs/yd.log' } },
  categories: { default: { appenders: ['ydlog'], level: 'error' } }
});

// 作用是为了做路由守护
app.use((ctx, next) => {
  ctx.state.container.register({
    user: (0, _awilix.asValue)("di")
  });
  return next();
});
const logger = _log4js2.default.getLogger('ydlog');
_ErrorHandler2.default.error(app, logger);
app.use((0, _koaStatic2.default)(_main2.default.staticDir));
// 初始化所有的路由
// app.use的作用：保证ctx上下文的传输
// InitController.getAllrouters(app,router);
app.use((0, _awilixKoa.loadControllers)('controllers/*.js', { cwd: __dirname }));
app.listen(_main2.default.port, () => {
  console.log('server is start');
});
// import app from 'test';
// app();
// if(process.env.NODE_ENV == 'development'){
//   function test(){
//     console.log('123');
//   }
//   test();
// }
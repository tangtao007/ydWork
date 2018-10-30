import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import server from 'koa-static';
import log4js from 'log4js';
import dev from './config/env';
import config from './config/main';
import {createContainer, asClass,Lifetime, asValue} from 'awilix';
import {loadControllers,scopePerRequest } from 'awilix-koa';
import ErrorHandler from './Middlewares/ErrorHandler';
// 开发环境所有配置
dev.init();
const app = new Koa();
// 灵魂IOC容器
const container = createContainer();
var co = require('co');

// 关键点 将所有的container的service 服务到每一个路由中去 DI
// 先把所有的service注册到容器里面来
container.loadModules([['models/*.js', { register: asClass }]], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
})
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false,
  varControls:['[[',']]']
}));
//!!! Service中心注入到对应的Controller中心去
app.use(scopePerRequest(container))
log4js.configure({
  appenders: { ydlog: { type: 'file', filename: './logs/yd.log' } },
  categories: { default: { appenders: ['ydlog'], level: 'error' } }
});

// 作用是为了做路由守护
app.use((ctx,next)=>{
  ctx.state.container.register({
    user:asValue("di")
  });
  return next();
});
const logger = log4js.getLogger('ydlog');
ErrorHandler.error(app,logger);
app.use(server(config.staticDir));
// 初始化所有的路由
// app.use的作用：保证ctx上下文的传输
// InitController.getAllrouters(app,router);
app.use(loadControllers('controllers/*.js',{cwd:__dirname}));
app.listen(config.port,()=>{
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

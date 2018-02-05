import Koa from 'koa';
import router from 'koa-simple-router';
import render from 'koa-swig';
import server from 'koa-static';
import log4js from 'log4js';
import config from './config/main';
import InitController from './controllers/InitController';
import ErrorHandler from './Middlewares/ErrorHandler';


const app = new Koa();
var co = require('co');
app.context.render = co.wrap(render({
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false,
  // varControls:['[[',']]']
}));
log4js.configure({
  appenders: { ydlog: { type: 'file', filename: './logs/yd.log' } },
  categories: { default: { appenders: ['ydlog'], level: 'error' } }
});
const logger = log4js.getLogger('ydlog');
ErrorHandler.error(app,logger);
app.use(server(config.staticDir));
// 初始化所有的路由
InitController.getAllrouters(app,router);
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

import Koa from 'koa'
const router = require('koa-simple-router')
import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';
import initController from './controller/init'
import path from 'path';
import CONFIG from './config/config'
const app = new Koa()
initController.init(app,router);
app.context.render = co.wrap(render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: 'memory', // disable, set to false 
  ext: 'html',
  writeBody: false
}));
app.use(serve(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'));
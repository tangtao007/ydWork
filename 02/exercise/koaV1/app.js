const Koa = require('koa');
const app = new Koa();

app.use(function *(next){
  var start = new Date();
  console.log("顺序1");
  yield next;
  var ms = new Date() - start;
  console.log("顺序2");
  this.set('X-Response-Time', ms + 'ms');
});

app.use(function *(next){
  var start = new Date();
  console.log("顺序3");
  yield next;
  var ms = new Date() - start;
  console.log("顺序4");
  console.log('%s %s - %s',this.method,this.url,ms);
});

app.use(function *(){
  console.log("顺序5");
  this.body = "Hello World";
  console.log("顺序6");
});

app.listen(3000);
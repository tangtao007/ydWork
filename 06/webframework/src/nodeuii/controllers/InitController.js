import IndexController from './IndexController';
import {makeInvoker } from 'awilix-koa';
// 业务逻辑控制
function makeApi({testService}){
  return {
    find:(ctx,next)=>{
      ctx.body = testService.find();
    }
  }
}
// 做了注入的工作
const api = makeInvoker(makeApi);
const IndexControllerIns = new IndexController();
const InitController = {
  getAllrouters(app,router){
    app.use(router(_ => {
      _.get("/",api("find"));
      _.get("index.html",IndexControllerIns.index());

    }));
  }
};
export default InitController;
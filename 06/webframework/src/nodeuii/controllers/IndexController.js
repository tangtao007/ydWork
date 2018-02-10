// 最原始的写法
// import IndexModel from '../models/IndexModel';
// class IndexController{
//   constructor(ctx){
//     this.ctx = ctx;
//   }
//   index(){
//     return async(ctx,next) => {
//       const indexModelIns = new IndexModel();
//       const result = await indexModelIns.getData();
//       ctx.body = await ctx.render('index',{data:result});
//     };
//   }
// }

// export default IndexController;

import { route, GET, POST, before } from 'awilix-koa' // or `awilix-router-core`
 
@route('/users')
export default class UserAPI {
  constructor({ testService }) {
    this.testService = testService
  }
 
  @route('/:id')
  @GET()
  @before([authenticate()])
  async getUser(ctx) {
    ctx.body = await this.testService.get(ctx.params.id)
  }
}
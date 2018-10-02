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
import authenticate from '../middlewares/authenticate';
@route('/users')
export default class UserAPI {
  constructor({ userService }) {
    this.userService = userService
  }
 /**
  * users/:id users/4 -> 会执行到下面这段async函数里
  拿回来一个promise的API
  use的方式去load的controllers
  * @param {*} ctx 
  */
  @route('/:id')
  @GET()
  @before([authenticate()])
  async getUser(ctx) {
    const result = await this.userService.get(ctx.params.id);
    ctx.body = await ctx.render("index",{data:result});
  }
}
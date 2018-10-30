import { route, GET, POST, before } from 'awilix-koa' // or `awilix-router-core`
@route('/hello')
export default class HelloAPI {
  constructor({ testService }) {
    this.testService = testService
  }
 /**
  * users/:id users/4 -> 会执行到下面这段async函数里
  拿回来一个promise的API
  use的方式去load的controllers
  * @param {*} ctx 
  */
  @GET()
  async getUser(ctx) {
    const result = await this.testService.find();
    ctx.body = await ctx.render("index",{data:result});
  }
}
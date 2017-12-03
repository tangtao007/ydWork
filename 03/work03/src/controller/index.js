import indexModel from '../models/indexmodel'
import 'babel-polyfill'; // 暂时只是为了使用es6的新特性
const indexController = {
  index(){    
    return async ctx =>{
      ctx.body = await ctx.render('../views/index',{
        title:"大拇指点赞G"
      });
    };
  },
  update(){
    return async(ctx,next)=>{
      const indexM = new indexModel(ctx);
      ctx.body = await indexM.updateNum();
    };
  }
}
export default indexController;
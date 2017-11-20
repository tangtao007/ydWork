import indexModel from '../models/indexmodel'
const indexController = {
  index(){    
    return async ctx =>{
      ctx.body = await ctx.render('../views/index',{
        title:"大拇指点赞"
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
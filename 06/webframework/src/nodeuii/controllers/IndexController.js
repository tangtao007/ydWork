import IndexModel from '../models/IndexModel';
class IndexController{
  constructor(ctx){
    this.ctx = ctx;
  }
  index(){
    return async(ctx,next) => {
      const indexModelIns = new IndexModel();
      const result = await indexModelIns.getData();
      ctx.body = await ctx.render('index',{data:result});
    };
  }
}

export default IndexController;
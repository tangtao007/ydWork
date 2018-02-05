import IndexController from './IndexController';
const IndexControllerIns = new IndexController();
const InitController = {
  getAllrouters(app,router){
    app.use(router(_ => {
      _.get("/",IndexControllerIns.index());
      _.get("index.html",IndexControllerIns.index());

    }));
  }
};
export default InitController;
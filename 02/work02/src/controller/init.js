import indexController from './index';
const initController = {
  init(app,router){
    app.use(router(_ => {
      _.get('/index',indexController.index());
      _.get('/update',indexController.update());
    }));
  }
}
export default initController;
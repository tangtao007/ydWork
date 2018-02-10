'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _IndexController = require('./IndexController');

var _IndexController2 = _interopRequireDefault(_IndexController);

var _awilixKoa = require('awilix-koa');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 业务逻辑控制
function makeApi({ testService }) {
  return {
    find: (ctx, next) => {
      ctx.body = testService.find();
    }
  };
}
// 做了注入的工作
const api = (0, _awilixKoa.makeInvoker)(makeApi);
const IndexControllerIns = new _IndexController2.default();
const InitController = {
  getAllrouters(app, router) {
    app.use(router(_ => {
      _.get("/", api("find"));
      _.get("index.html", IndexControllerIns.index());
    }));
  }
};
exports.default = InitController;
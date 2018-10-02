'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2; // 最原始的写法
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

// or `awilix-router-core`


var _awilixKoa = require('awilix-koa');

var _authenticate = require('../middlewares/authenticate');

var _authenticate2 = _interopRequireDefault(_authenticate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

let UserAPI = (_dec = (0, _awilixKoa.route)('/users'), _dec2 = (0, _awilixKoa.route)('/:id'), _dec3 = (0, _awilixKoa.GET)(), _dec4 = (0, _awilixKoa.before)([(0, _authenticate2.default)()]), _dec(_class = (_class2 = class UserAPI {
  constructor({ userService }) {
    this.userService = userService;
  }
  /**
   * users/:id users/4 -> 会执行到下面这段async函数里
   拿回来一个promise的API
   use的方式去load的controllers
   * @param {*} ctx 
   */

  async getUser(ctx) {
    const result = await this.userService.get(ctx.params.id);
    ctx.body = await ctx.render("index", { data: result });
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'getUser', [_dec2, _dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'getUser'), _class2.prototype)), _class2)) || _class);
exports.default = UserAPI;
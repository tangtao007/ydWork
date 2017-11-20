'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
  init: function init(app, router) {
    app.use(router(function (_) {
      _.get('/index', _index2.default.index());
      _.get('/update', _index2.default.update());
    }));
  }
};
exports.default = initController;
'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app = require('../app.es');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestTest() {
  return (0, _supertest2.default)(_app2.default.listen());
}

describe('测试路由', function () {
  it('点赞', function (done) {
    (0, _supertest2.default)(_app2.default).get('/update').expect(200).end(function (err, res) {
      if (res.data == 1) {
        return done(err);
      }
      done();
    });
  });
});

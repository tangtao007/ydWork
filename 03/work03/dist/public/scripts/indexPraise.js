'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('../styles/index.css');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PraiseButton = function () {
  function PraiseButton() {
    _classCallCheck(this, PraiseButton);
  }

  _createClass(PraiseButton, [{
    key: 'clickAction',
    value: function clickAction() {
      axios.get('/update').then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }]);

  return PraiseButton;
}();

exports.default = PraiseButton;
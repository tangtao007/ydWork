'use strict';

var _indexPraise = require('./indexPraise.es');

var _indexPraise2 = _interopRequireDefault(_indexPraise);

var _timers = require('timers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var f = new _indexPraise2.default();
xtag.register('x-praise', {
  content: '<div class="containe">\n  <div class="hand" id="thumb">\n    <div class="figger finger01"></div>\n    <div class="figger finger02"></div>\n    <div class="figger finger03"></div>\n    <div class="figger finger04"></div>\n    <div class="figger finger05 thumb"></div>\n    <div class="arm"></div>\n  </div>\n</div>\n<span class="hide" id="animation">+1</span>',
  lifecycle: {
    created: function created() {
      /* Called when the custom element is created */
      console.log('created');
    },
    inserted: function inserted() {
      /* Called when the custom element is inserted into the DOM */
    },
    removed: function removed() {
      /* Called when the custom element is removed from the DOM */
    },
    attributeChanged: function attributeChanged(attrName, oldValue, newValue) {
      /* Called when the attribute of the custom element is changed */
    }
  },
  methods: {
    parseDom: function parseDom(arg) {
      var objE = document.createElement("div");

      objE.innerHTML = arg;

      return objE.firstChild;
    },

    praise: function praise() {
      var _this = this;
      var promiseClick = f.clickAction();
      var animation = _this.querySelector("#animation");
      animation.className = "hide num";
      (0, _timers.setTimeout)(function () {
        animation.className = "hide";
      }, 800);
    }
  },
  events: {
    click: function click(e) {
      var _this = this;
      if (e.target.id == "thumb") {
        if (_this.t) {
          (0, _timers.clearTimeout)(_this.t);
        }
        _this.t = (0, _timers.setTimeout)(function () {
          _this.praise();
        }, 500);
      }
    }
  }
});
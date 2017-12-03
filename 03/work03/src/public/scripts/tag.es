import PraiseButton from './indexPraise.es';
import {
  setTimeout,
  clearTimeout
} from 'timers';
let f = new PraiseButton();
xtag.register('x-praise', {
  content: `<div class="containe">
  <div class="hand" id="thumb">
    <div class="figger finger01"></div>
    <div class="figger finger02"></div>
    <div class="figger finger03"></div>
    <div class="figger finger04"></div>
    <div class="figger finger05 thumb"></div>
    <div class="arm"></div>
  </div>
</div>
<span class="hide" id="animation">+1</span>`,
  lifecycle: {
    created: function () {
      /* Called when the custom element is created */
      console.log('created');
    },
    inserted: function () {
      /* Called when the custom element is inserted into the DOM */
    },
    removed: function () {
      /* Called when the custom element is removed from the DOM */
    },
    attributeChanged: function (attrName, oldValue, newValue) {
      /* Called when the attribute of the custom element is changed */
    }
  },
  methods: {
    parseDom(arg) {　　
      var objE = document.createElement("div");

      　　
      objE.innerHTML = arg;

      　　
      return objE.firstChild;
    },
    praise: function () {
      let _this = this;
      let promiseClick = f.clickAction();
      let animation = _this.querySelector("#animation");
      animation.className = "hide num";
      setTimeout(function () {
        animation.className = "hide";
      }, 800)
    }
  },
  events: {
    click: function (e) {
      let _this = this;
      if (e.target.id == "thumb") {
        if (_this.t) {
          clearTimeout(_this.t);
        }
        _this.t = setTimeout(() => {
          _this.praise();
        }, 500)
      }
    }
  }
});
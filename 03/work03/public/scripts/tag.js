xtag.register('x-praise', {
  content:`<div class="containe">
  <div class="hand" id="thumb">
    <div class="figger finger01"></div>
    <div class="figger finger02"></div>
    <div class="figger finger03"></div>
    <div class="figger finger04"></div>
    <div class="figger finger05 thumb"></div>
    <div class="arm"></div>
  </div>
</div>`,
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
    }
  },
  events: {
    tap: function () {}
  }
});
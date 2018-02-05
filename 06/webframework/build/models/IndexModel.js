"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anyPromise = require("any-promise");

class IndexModel {
  constructor() {}
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Hello World");
      }, 1000);
    });
  }
}

exports.default = IndexModel;
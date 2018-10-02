"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anyPromise = require("any-promise");

let UserService = class UserService {
  constructor() {}
  get(id) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("Hello World" + "[" + id + "]");
      }, 1000);
    });
  }
};
exports.default = UserService;
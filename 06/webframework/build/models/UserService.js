"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anyPromise = require("any-promise");

let UserService = class UserService {
  constructor() {}
  get(id) {
    return new Promise((resolve, reject) => {
      console.log("id....", id);
      setTimeout(function () {
        console.log("setTimeout");
        resolve("Hello World" + "[" + id + "]");
      }, 100);
    });
  }
};
exports.default = UserService;
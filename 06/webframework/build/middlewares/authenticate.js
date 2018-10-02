"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const authenticate = () => {
  return (target, next, desc) => {
    console.log("路由守护", target);
    return next();
    //target.redirect('http://www.baidu.com');
  };
};
exports.default = authenticate;
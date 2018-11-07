"use strict";

var condition = true;
var str = condition ? 1 : 2;
import("./test".concat(str, ".js")).then(function (_ref) {
  var hello = _ref.hello;
  hello();
});
console.log("Hello World!");

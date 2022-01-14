"use strict";
exports.__esModule = true;
exports.hello = void 0;
var world = 'world';
var hello = function (word) {
    if (word === void 0) { word = world; }
    return "Hello ".concat(word, "!");
};
exports.hello = hello;

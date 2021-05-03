"use strict";
exports.__esModule = true;
//Enum defined a set of named constants
//the value of  enum can't change
var isConstants;
(function (isConstants) {
    isConstants[isConstants["pi"] = 3.14] = "pi";
    isConstants[isConstants["e"] = 2.73] = "e";
})(isConstants || (isConstants = {}));
console.log('Finding  Circumference of the circle');
var radius = 10;
console.log(2 * isConstants.pi * radius);

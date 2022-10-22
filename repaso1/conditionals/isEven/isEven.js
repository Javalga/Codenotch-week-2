"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEven = void 0;
var isEven = function (num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is even"));
    }
    else
        console.log("".concat(num, " is odd"));
};
exports.isEven = isEven;
(0, exports.isEven)(82137);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEven = void 0;
var hasEven = function (numbers) {
    var i = 0;
    while (i < numbers.length && numbers[i] % 2 !== 0) {
        i++;
    }
    return i < numbers.length;
};
exports.hasEven = hasEven;
console.log((0, exports.hasEven)([1, 3, 5, 7, 9]));

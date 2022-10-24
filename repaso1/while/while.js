"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEven = void 0;
var hasEven = function (numbers) {
    var i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            return true;
        }
        i++;
    }
    return false;
};
exports.hasEven = hasEven;
console.log((0, exports.hasEven)([1, 2, 3, 4, 5, 6, 7, 8, 98, 6, 5, 3, 23, 4, 6, 6, 5, 4, 3]));

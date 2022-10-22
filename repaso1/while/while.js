"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasEven = void 0;
var hasEven = function (numbers) {
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        if (numbers[number] % 2 === 0) {
            return true;
        }
    }
    return false;
};
exports.hasEven = hasEven;
console.log((0, exports.hasEven)([1, 2, 3, 4, 5, 6, 7, 8, 98, 6, 5, 3, 23, 4, 6, 6, 5, 4, 3]));

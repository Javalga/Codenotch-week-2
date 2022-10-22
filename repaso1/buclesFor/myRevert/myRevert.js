"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myRevert = void 0;
var myRevert = function (arr) {
    var reversedArr = new Array;
    for (var i = 1; i < arr.length + 1; i++) {
        reversedArr.push(arr[arr.length - i]);
    }
    return reversedArr;
};
exports.myRevert = myRevert;
console.log((0, exports.myRevert)([1, 2, 3, 4, 5]));

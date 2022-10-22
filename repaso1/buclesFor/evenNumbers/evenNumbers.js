"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evenNumbers = void 0;
var evenNumbers = function (num) {
    for (var i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
};
exports.evenNumbers = evenNumbers;
(0, exports.evenNumbers)(304);

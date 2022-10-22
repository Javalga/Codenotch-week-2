"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWords = void 0;
var addWords = function (words) {
    var accumulated = 0;
    for (var word in words) {
        accumulated += words[word].length;
    }
    return accumulated;
};
exports.addWords = addWords;
(0, exports.addWords)(['Hello', 'my', 'name', 'is', 'Javi']);

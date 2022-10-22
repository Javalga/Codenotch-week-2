"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startsWithM = void 0;
var startsWithM = function (names) {
    var starts = true;
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        if (name_1[0] === 'M') {
            continue;
        }
        else {
            starts = false;
        }
    }
    return starts;
};
exports.startsWithM = startsWithM;
console.log((0, exports.startsWithM)(['Jose', 'Maria', 'Manolo', 'Lola', 'Josefa']));

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRainbow = void 0;
var isRainbow = function (colors) {
    for (var color in colors) {
        switch (colors[color]) {
            case 'rojo':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'naranja':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'amarillo':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'verde':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'cian':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'azul':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            case 'violeta':
                console.log("".concat(color, " es del arcoiris!"));
                break;
            default: console.log("".concat(color, " no es del arcoiris :("));
        }
    }
};
exports.isRainbow = isRainbow;
(0, exports.isRainbow)(['rojo', 'azul', 'magenta', 'rosa', 'amarillo', 'azul']);

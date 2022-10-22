"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.continent = void 0;
var continent = function (country) {
    switch (country) {
        case 'Belgium':
            console.log('Europe');
            break;
        case 'Spain':
            console.log('Europe');
            break;
        case 'Germany':
            console.log('Europe');
            break;
        case 'Canada':
            console.log('America');
            break;
        case 'USA':
            console.log('America');
            break;
        case 'Mexico':
            console.log('America');
            break;
        case 'South Korea':
            console.log('Asia');
            break;
        case 'China':
            console.log('Asia');
            break;
        case 'Thailandia':
            console.log('Asia');
            break;
        case 'Israel':
            console.log('Africa');
            break;
        case 'Egypt':
            console.log('Africa');
            break;
        case 'Congo':
            console.log('Africa');
            break;
        case 'Philipines':
            console.log('Oceania');
            break;
        case 'Australia':
            console.log('Oceania');
            break;
        case 'Nueva guinea':
            console.log('Oceania');
            break;
        default: 'Undefined';
    }
};
exports.continent = continent;
(0, exports.continent)('Spain');

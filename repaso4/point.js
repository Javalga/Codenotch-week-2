"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.setX = function (value) {
        this.x = value;
    };
    Point.prototype.setY = function (value) {
        this.y = value;
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        var distance = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
        return distance;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distance = Math.sqrt(Math.pow((this.x - anotherPoint.x), 2) + Math.pow((this.y - anotherPoint.y), 2));
        return distance;
    };
    return Point;
}());
exports.Point = Point;

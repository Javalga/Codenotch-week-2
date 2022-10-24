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
        var distance = Math.round(Math.sqrt(Math.pow((this.x - anotherPoint.x), 2) + Math.pow((this.y - anotherPoint.y), 2)));
        return distance;
    };
    Point.prototype.calculateCuadrant = function () {
        if (this.x === 0 || this.y === 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        var currentPoint = new Point(this.x, this.y);
        var closestPoint = points[0];
        for (var i = 0; i < points.length; i++) {
            if (currentPoint.calculateDistance(points[i]) < currentPoint.calculateDistance(closestPoint)) {
                closestPoint = points[i];
            }
        }
        return closestPoint;
    };
    return Point;
}());
exports.Point = Point;

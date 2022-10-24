"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(1, 3);
var anotherPoint = new point_1.Point(4, -5);
var point1 = new point_1.Point(1, -6);
var point2 = new point_1.Point(3, -2);
var point3 = new point_1.Point(5, -2);
var point4 = new point_1.Point(3, -3);
// myPoint.setX(2)
// myPoint.setY(4)
// console.log(myPoint.getX())
// console.log(myPoint.getY())
// console.log(myPoint.distanceToOrigin());
// console.log(myPoint.calculateDistance(anotherPoint));
// console.log(anotherPoint.calculateCuadrant())
console.log(myPoint.calculateNearest([point1, point2, point3, point4]));

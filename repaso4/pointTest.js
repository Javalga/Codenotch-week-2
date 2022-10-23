"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var myPoint = new point_1.Point(1, 3);
myPoint.setX(2);
myPoint.setY(4);
console.log(myPoint.getX());
console.log(myPoint.getY());

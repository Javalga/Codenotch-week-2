import { Point } from './point'
import { Triangle } from './triangle'
let point1 = new Point(1, 2)
let point2 = new Point(2, 4)
let point3 = new Point(4, 5)
let myTriangle = new Triangle(point1, point2, point3)

console.log(myTriangle.calculateLengthSides())


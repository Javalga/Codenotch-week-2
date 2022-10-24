import { Point } from './point'

let myPoint = new Point(1, 3)
let anotherPoint = new Point(4, -5)
let point1 = new Point(1, -6)
let point2 = new Point(3, -2)
let point3 = new Point(5, -2)
let point4 = new Point(3, -3)

// myPoint.setX(2)
// myPoint.setY(4)
// console.log(myPoint.getX())
// console.log(myPoint.getY())


// console.log(myPoint.distanceToOrigin());
// console.log(myPoint.calculateDistance(anotherPoint));


// console.log(anotherPoint.calculateCuadrant())

console.log(myPoint.calculateNearest([point1, point2, point3, point4]))

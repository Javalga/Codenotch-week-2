import { Point } from './point'

let myPoint = new Point(1, 3)
let anotherPoint = new Point(4, -5)
myPoint.setX(2)
myPoint.setY(4)
console.log(myPoint.getX())
console.log(myPoint.getY())


console.log(myPoint.distanceToOrigin());
console.log(myPoint.calculateDistance(anotherPoint));



import { Vector } from './vector'

let myVector = new Vector(10, 50)
let myVector1 = new Vector(10, 30)

myVector1.print()

console.log(myVector.add(myVector1));
console.log(myVector.subs(myVector1));
console.log(myVector.mult(myVector1));
console.log(myVector.multNumber(5));

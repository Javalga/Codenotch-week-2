"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var myPerson = new person_1.Person("Manuel", 67, "Florida");
console.log(myPerson);
myPerson.printName();
console.log(myPerson.yearOfBirth(2022));
myPerson.setAddress("Bulerias");
console.log(myPerson.getAddress());

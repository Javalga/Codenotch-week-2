import { Person } from "./person";

let myPerson = new Person("Manuel", 67, "Florida");
console.log(myPerson);
myPerson.printName();
console.log(myPerson.yearOfBirth(2022));
myPerson.setAddress("Bulerias");
console.log(myPerson.getAddress());

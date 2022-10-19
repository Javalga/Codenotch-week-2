let { Person } = require("./person.js");

let person1 = new Person(
  "Manuel",
  1.8,
  75,
  678908475,
  1975,
  "Correr",
  "Futbol",
  "Leer"
);

person1.calcImc();
let person1Age = person1.calcAge();
console.log(person1Age);
person1.printAll();
person1.printHobbies();

let { Contacts } = require("./contacts.js");
let { Person } = require("./person.js");

let myContacts = new Contacts();


let person1 = new Person(
  "Pepe",
  1.8,
  75,
  678908475,
  1975,
  "Correr",
  "Futbol",
  "Leer"
);

let person2 = new Person(
  "Jose",
  1.85,
  80,
  611111111,
  1989,
  "Dormir",
  "Comer",
  "Musica"
);

let person3 = new Person(
  "Maria",
  1.6,
  58,
  622222222,
  1999,
  "Atletismo",
  "Ajedrez",
  "Musica"
);

myContacts.addPersons([person1,person2,person3])
myContacts.printPersons()

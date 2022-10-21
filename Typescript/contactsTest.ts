import { Person } from "./person";
import { Contacts } from "./contacts";

let myPerson1 = new Person("Manolo", 36, "Rumba");
let myPerson2 = new Person("Josefa", 56, "Amor");
let myPerson3 = new Person("Jose", 30, "Fandango");

let myContacts = new Contacts();

myContacts.people = [myPerson1, myPerson2, myPerson3];

myContacts.printCalendar();

import { Library } from "./library";
import { Book } from "./book";

let myBook1 = new Book(
  "Introducción a Javascript",
  233,
  "2344433-BC23333",
  "Joseph Smith",
  "Now Editions"
);

let myBook2 = new Book(
  "Introducción a PHP",
  269,
  "1111111-BC23333",
  "Adam Smith",
  "Planera"
);

let myBook3 = new Book(
  "Introducción a Java",
  697,
  "2222222-BC23333",
  "Joseph Adams",
  "Generic Editorial"
);

let books = [myBook1, myBook2, myBook3];
let myLib = new Library(books, "Real", "Jorge Manuel");

console.log(myLib.toString());

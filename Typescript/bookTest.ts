import { Book } from "./book";

let myBook = new Book(
  "Introducción a Javascript",
  233,
  "2344433-BC23333",
  "Joseph Smith",
  "Now Editions"
);
// getters test
console.log(myBook.getTitle());
console.log(myBook.getnPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());

//setters test
myBook.setTitle("Introduccion a PHP");
myBook.setnPages(5860);
myBook.setIsbn("2344433-BC11111");
myBook.setAuthor("Goku");
myBook.setEditorial("Planeta");

console.log(myBook.getTitle());
console.log(myBook.getnPages());
console.log(myBook.getIsbn());
console.log(myBook.getAuthor());
console.log(myBook.getEditorial());

// methods test

console.log(myBook.toString());

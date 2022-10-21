import { Book } from "./book";

export class Library {
  private books: Book[];
  private address: string;
  private manager: string;
  constructor(books: Book[], address: string, manager: string) {
    this.books = books;
    this.address = address;
    this.manager = manager;
  }
  public getAddress() {
    return this.address;
  }
  public getManager() {
    return this.manager;
  }
  public setAddress(newAddress: string) {
    this.address = newAddress;
  }
  public setManager(newManager: string) {
    this.address = newManager;
  }
  public toString(): string {
    let fullString: string = "";
    for (let i = 0; i < this.books.length; i++) {
      fullString += `\n\nBook${i + 1}:\nTitle - ${this.books[i].getTitle()}\nNumber of pages - ${this.books[i].getnPages()}\nISBN - ${this.books[i].getIsbn()}\nAuthor - ${this.books[i].getAuthor()}\nEditorial - ${this.books[i].getEditorial()}`
    }
    return fullString;
  }
}


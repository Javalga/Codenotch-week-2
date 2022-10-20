export class Book {
  private title: string;
  private nPages: number;
  private isbn: string;
  private author: string;
  private editorial: string;
  constructor(
    title: string,
    nPages: number,
    isbn: string,
    author: string,
    editorial: string
  ) {
    this.title = title;
    this.nPages = nPages;
    this.isbn = isbn;
    this.author = author;
    this.editorial = editorial;
  }
  // getters
  public getTitle() {
    return this.title;
  }
  public getnPages() {
    return this.nPages;
  }
  public getIsbn() {
    return this.isbn;
  }
  public getAuthor() {
    return this.author;
  }
  public getEditorial() {
    return this.editorial;
  }
  // setters
  public setTitle(title: string) {
    this.title = title;
  }
  public setnPages(nPages: number) {
    this.nPages = nPages;
  }
  public setIsbn(isbn: string) {
    this.isbn = isbn;
  }
  public setAuthor(author: string) {
    this.author = author;
  }
  public setEditorial(editorial: string) {
    this.editorial = editorial;
  }
  //methods
  public toSimplifiedString(): string {
    return `Title - ${this.title}
            Number of pages - ${this.nPages}
            ISBN - ${this.isbn}
            Author - ${this.author}
            Editorial - ${this.editorial}`;
  }
}

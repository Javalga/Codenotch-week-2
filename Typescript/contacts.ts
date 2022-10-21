import { Person } from "./person";

export class Contacts {
  public people: Person[];
  constructor() {
    this.people = [];
  }
  public printCalendar() {
    for (let person of this.people) {
      console.log(person);
    }
  }
}

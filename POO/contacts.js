

class Contacts {
  constructor() {
    this.personList = [];
  }
  // le he creado un metodo para poder añadir personas al array
  addPersons(arr) {
    for(let person of arr){
      this.personList.push(person)
    }
  }
  printPersons() {
    for (let i = 0; i < this.personList.length; i++) {
      console.log(this.personList[i])
    }
  }
}

module.exports = { Contacts };

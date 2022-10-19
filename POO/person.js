// reto 1
class Person {
  constructor(
    name,
    height,
    weight,
    phone,
    yearOfBirth,
    hobbie1,
    hobbie2,
    hobbie3
  ) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.phone = phone;
    this.imc = undefined;
    this.yearOfBirth = yearOfBirth;
    this.hobbies = [hobbie1, hobbie2, hobbie3];
  }
  // reto 2
  calcImc() {
    let imc = Math.round(this.weight / (this.height * this.height));
    this.imc = `${imc}%`;
    return imc;
  }
  calcAge() {
    let currentYear = 2022;
    return currentYear - this.yearOfBirth;
  }
  printAll() {
    for (let props in this) {
      console.log(` ${props} - ${this[props]}`);
    }
  }
  printHobbies() {
    for(let hobbie of this.hobbies){
      console.log(hobbie);
    }
  }
}

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
person1.printHobbies()


module.exports = {Person}
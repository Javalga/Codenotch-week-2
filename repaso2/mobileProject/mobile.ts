export class Mobile {
  constructor(private name: string, private trademark: string, private model: string, private color: string, private price: number) {
    this.name = name;
    this.trademark = trademark;
    this.model = model;
    this.color = color;
    this.price = price
  }
  public setName(name: string) {
    this.name = name
  }
  public setTrademark(trademark: string) {
    this.trademark = trademark
  }
  public setModel(model: string) {
    this.model = model
  }
  public setColor(color: string) {
    this.color = color
  }
  public setPrice(price: number) {
    this.price = price
  }
  public getName() {
    return this.name
  }
  public getTrademark() {
    return this.trademark
  }
  public getModel() {
    return this.model
  }
  public getColor() {
    return this.color
  }
  public getPrice() {
    return this.price
  }
  public toString() {
    console.log(`\nThe caracteristics of the mobile are:\nName: ${this.name}\nTrademark:\t${this.trademark}\nModel: ${this.model}\nColor: ${this.color}\nPrice: ${this.price}\n`);
  }
}
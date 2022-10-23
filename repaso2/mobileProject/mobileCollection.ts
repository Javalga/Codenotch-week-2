import { Mobile } from './mobile'

export class MobileCollection {
  private mobiles: Mobile[];
  private totalPrice: number
  constructor(mobiles: Mobile[]) {
    this.mobiles = mobiles
    this.totalPrice = this.totalPriceCalculation()
  }
  public getMobiles() {
    return this.mobiles
  }
  public getTotalPrice() {
    return this.totalPrice
  }
  public setMobiles(newMobiles: Mobile[]): void {
    this.mobiles = newMobiles
  }
  public setTotalPrice(newTotalPrice: number) {
    this.totalPrice = newTotalPrice
  }
  private totalPriceCalculation() {
    let result = 0
    for (let mobile of this.mobiles) {
      result += mobile.getPrice()
    }
    return result
  }
  public printCollection() {
    let fullString = ''
    for (let i: number = 0; i < this.mobiles.length; i++) {
      fullString += `\nThe characteristics of the mobile ${this.mobiles[i].getName()} are:\n\tName:\t${this.mobiles[i].getName()}\n\tTrademark:   ${this.mobiles[i].getTrademark()}\n\tModel:\t${this.mobiles[i].getModel()}\n\tColor:\t${this.mobiles[i].getColor()}\n\tPrice:\t${this.mobiles[i].getPrice()}\n\n`
    } return fullString
  }
}
import { Mobile } from './mobile'

export class MobileCollection {
  private mobiles: Mobile[];
  private totalPrice: number
  constructor(mobiles: Mobile[]) {
    this.mobiles = mobiles
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
  public totalPriceCalculation() {
    let result = 0
    for (let mobile of this.mobiles) {
      result += mobile.getPrice()
    }
    return result
  }
}
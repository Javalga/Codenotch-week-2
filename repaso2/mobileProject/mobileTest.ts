import { Mobile } from './mobile'

let myMobile1 = new Mobile('Ericson', 'Huawei', 'P40', 'Black', '300$')
let myMobile2 = new Mobile('Galaxy', 'Sansumg', 'S22', 'Black', '700$')
let myMobile3 = new Mobile('R44', 'Nokia', 'Ericson', 'White', '500$')

// console.log(myMobile1.getColor())
// console.log(myMobile1.getModel())
// console.log(myMobile1.getName())
// console.log(myMobile1.getName())
// console.log(myMobile1.getTrademark())

// myMobile1.setColor('Blue')
// myMobile1.setModel('Samsung')
// myMobile1.setName('Iphone')
// myMobile1.setPrice('120123190$')
// myMobile1.setTrademark('Apple')

let myMobiles = [myMobile1, myMobile2, myMobile3]

for (let mobile in myMobiles{
  myMobiles[mobile].toString()
}
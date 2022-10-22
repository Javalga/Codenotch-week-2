import { Mobile } from './mobile'

let myMobile = new Mobile('Ericson', 'Huawei', 'P40', 'Black', '300$')

console.log(myMobile.getColor())
console.log(myMobile.getModel())
console.log(myMobile.getName())
console.log(myMobile.getName())
console.log(myMobile.getTrademark())

myMobile.setColor('Blue')
myMobile.setModel('Samsung')
myMobile.setName('Iphone')
myMobile.setPrice('120123190$')
myMobile.setTrademark('Apple')
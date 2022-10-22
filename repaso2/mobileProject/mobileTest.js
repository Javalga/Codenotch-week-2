"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile1 = new mobile_1.Mobile('Ericson', 'Huawei', 'P40', 'Black', 300);
var myMobile2 = new mobile_1.Mobile('Galaxy', 'Sansumg', 'S22', 'Black', 700);
var myMobile3 = new mobile_1.Mobile('R44', 'Nokia', 'Ericson', 'White', 500);
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
var myMobiles = [myMobile1, myMobile2, myMobile3];
for (var mobile in myMobiles) {
    myMobiles[mobile].toString();
}

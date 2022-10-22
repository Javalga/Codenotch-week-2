import { MobileCollection } from "./mobileCollection";
import { Mobile } from './mobile'

let myMobile1 = new Mobile('Ericson', 'Huawei', 'P40', 'Black', 300)
let myMobile2 = new Mobile('Galaxy', 'Sansumg', 'S22', 'Black', 700)
let myMobile3 = new Mobile('R44', 'Nokia', 'Ericson', 'White', 500)
let myMobile4 = new Mobile('G59', 'Motorolaa', 'Soni', 'Pink', 100)

let myMobileCollection = new MobileCollection([myMobile1, myMobile2, myMobile3, myMobile4])

console.log(myMobileCollection.totalPriceCalculation())

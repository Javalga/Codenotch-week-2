"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setMobiles = function (newMobiles) {
        this.mobiles = newMobiles;
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var result = 0;
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mobile = _a[_i];
            result += mobile.getPrice();
        }
        return result;
    };
    MobileCollection.prototype.printCollection = function () {
        var fullString = '';
        for (var i = 0; i < this.mobiles.length; i++) {
            fullString += "\nThe characteristics of the mobile ".concat(this.mobiles[i].getName(), " are:\n\tName:\t").concat(this.mobiles[i].getName(), "\n\tTrademark:   ").concat(this.mobiles[i].getTrademark(), "\n\tModel:\t").concat(this.mobiles[i].getModel(), "\n\tColor:\t").concat(this.mobiles[i].getColor(), "\n\tPrice:\t").concat(this.mobiles[i].getPrice(), "\n\n");
        }
        return fullString;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;

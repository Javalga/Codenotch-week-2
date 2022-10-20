"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    function Contacts() {
        this.people = [];
    }
    Contacts.prototype.printCalendar = function () {
        for (var _i = 0, _a = this.people; _i < _a.length; _i++) {
            var person = _a[_i];
            console.log(person);
        }
    };
    return Contacts;
}());
exports.Contacts = Contacts;

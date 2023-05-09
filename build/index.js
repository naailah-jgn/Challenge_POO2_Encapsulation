"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
class BankCustomer {
    constructor(customerName, pinCode) {
        this.customerName = customerName;
        this.pinCode = pinCode;
    }
    getName() {
        return this.customerName;
    }
    verifyPinInput(newPinCode) {
        if (this.pinCode == newPinCode) {
            console.log("Le code est correct !");
            return true;
        }
        else {
            console.log("Le code entré est erroné !");
            return false;
        }
    }
}
const customer = new BankCustomer('John Doe', '3579');
assert_1.default.equal(typeof customer.getName(), 'string');
assert_1.default.equal(typeof customer.verifyPinInput('4020'), 'boolean');
// assert.equal(customer.getName(), 'John Doe');
// assert.ok(customer.verifyPinInput('3579'));

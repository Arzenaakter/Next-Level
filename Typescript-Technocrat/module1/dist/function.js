"use strict";
function addNumbers(num1, num2) {
    return num1 + num2;
}
addNumbers(2, 5);
const addStrings = (name1, name2) => name1 + name2;
const users = {
    name: 'arzena',
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    }
};
const userA = {
    name: 'arzena',
    balance: 0,
    addBalance(balance) {
        return ` the new balance is : ${this.balance + balance}`;
    }
};
const arrs = [1, 2, 3, 4];
const newArr = arrs.map((item) => item * item);

"use strict";
console.log('Your code goes here...!!!');
function add(n1, n2) {
    return n1 + n2;
}
const num1 = 5;
const num2 = 2.8;
const result = add(num1, num2);
console.log(result);
var RoleType;
(function (RoleType) {
    RoleType[RoleType["ADMIN"] = 0] = "ADMIN";
    RoleType[RoleType["READ_ONLY"] = 1] = "READ_ONLY";
    RoleType[RoleType["AUTHOR"] = 2] = "AUTHOR";
})(RoleType || (RoleType = {}));
const person = {
    name: 'Shishir',
    age: 35,
    hobbies: ['Sports', 'Cycling'],
    role: [2, 'author'],
    roleType: RoleType.ADMIN
};
person.role.push('aaa');
console.log(person.role, "   ", person.roleType);
const product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
console.log(product.details.title);
let favoriteActivities;
favoriteActivities = ['Sports', 1];
function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
const combineAge = combine(30, 20);
console.log(combineAge);
const combineNames = combine('Shishir', 'Roy');
console.log(combineNames);
const u1 = { name: 'Max', age: 30 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
function greet_(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder_(user, checkAge) {
    return checkAge > user.age;
}
let u2 = { name: 'Max' };
u2 = 'Michael';
function add_1(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ', num);
}
printResult(add_1(10, 10));
let combineFunction;
combineFunction = add_1;
let combineFunction1;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => { console.log('result ', result); });
function sendRequest(data, cb) {
    console.log(data);
    return cb({ data: 'Hi there!' });
}
sendRequest('Send this!', (response) => {
    console.log(response);
    return true;
});
let userInput;
userInput = 5;
userInput = 'Shishir';
let userName;
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
console.log("Ending--");

// What is destructuring assignment

// The destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays or properties from objects into distinct variables. Let's get the month values from an array using destructuring assignment.

var [one, two, three] = ["JAN", "FEB", "MARCH"];

console.log(one); // "JAN"
console.log(two); // "FEB"
console.log(three); // "MARCH"

// and you can get user properties of an object using destructuring assignment,


var { name, age } = { name: "John", age: 32 };

console.log(name); // John
console.log(age); // 32

// What are default values in destructuring assignment

// A variable can be assigned a default value when the value unpacked from the array or object is undefined during destructuring assignment. It helps to avoid setting default values separately for each assignment. Let's take an example for both arrays and object use cases,

// Arrays destructuring:
var x, y, z;

[x = 2, y = 4, z = 6] = [10];
console.log(x); // 10
console.log(y); // 4
console.log(z); // 6

// Objects destructuring:
var { x = 2, y = 4, z = 6 } = { x: 10 };

console.log(x); // 10
console.log(y); // 4
console.log(z); // 6

// How do you swap variables in destructuring assignment

var x = 10,
  y = 20;

[x, y] = [y, x];
console.log(x); // 20
console.log(y); // 10

// What are enhanced object literals
// Object literals make it easy to quickly create objects with properties inside the curly braces. For example, it provides shorter syntax for common object property definition as below.

//ES6
var x = 10,
  y = 20;
obj = { x, y };
console.log(obj); // {x: 10, y:20}
//ES5
var x = 10,
  y = 20;
obj = { x: x, y: y };
console.log(obj); // {x: 10, y:20}


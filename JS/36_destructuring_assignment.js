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

// Object destructuring is a technique in JavaScript that allows you to extract individual properties from an object and assign them to variables. Here's an example of object destructuring with a complex object:

const user = {
  id: 1,
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

const { id, name, address: { street, city, state, zip } } = user;

console.log(id); // 1
console.log(name); // 'John Doe'
console.log(street); // '123 Main St'
console.log(city); // 'Anytown'
console.log(state); // 'CA'
console.log(zip); // '12345'

// In the above example, we're using object destructuring to extract the id, name, and address properties from the user object. We're also using nested destructuring to extract the street, city, state, and zip properties from the address object.

// If the object being destructured is null or undefined, you'll get a runtime error. For example:

const user = null;
const { id, name } = user; // Uncaught TypeError: Cannot destructure property 'id' of 'null' or 'undefined'

// To avoid this error, you can provide default values for the properties being destructured, like this:

const user = null;
const { id = 0, name = 'Unknown' } = user;

console.log(id); // 0
console.log(name); // 'Unknown'

// In the above example, we're using default values of 0 and 'Unknown' for the id and name properties, respectively, in case the user object is null or undefined.



// Below are the list of some new features of ES6,
// 	i	Support for constants or immutable variables
// 	ii	Block-scope support for variables, constants and functions - done
// 	iii	Arrow functions  - done
// 	iv	Default parameters (done)
// 	v	Rest and Spread Parameters (done)
// 	vi	Template Literals (done)
// 	vii	Multi-line Strings (done)
// 	viii Destructuring Assignment (done)
// 	ix	Enhanced Object Literals (done)
// 	x	Promises (done)
// 	xi	Classes (done)
// 	xii	Modules (done)

// ES6, also known as ECMAScript 2015, is a major update to the JavaScript programming language. It introduced several new features and improvements to the language that make it more powerful and easier to work with. Here are some of the key features of ES6 with examples:

// Arrow Functions:
// Arrow functions provide a concise way to define functions in JavaScript. They have a shorter syntax than traditional function expressions and do not bind their own this, arguments, super, or new.target.

// Traditional Function
function multiply(a, b) {
    return a * b;
  }
  
  // Arrow Function
  const multiply = (a, b) => a * b;

//   Template Literals:
// Template literals provide a new way to define strings in JavaScript. They allow you to include expressions and variables inside the string, making it easier to create dynamic strings.
const name = "John";
const message = `Hello, ${name}!`;

console.log(message); // Output: Hello, John!

// Classes:
// ES6 introduced a new syntax for defining classes in JavaScript, making it easier to create object-oriented code. Classes provide a way to define a blueprint for creating objects with properties and methods.
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  
    get area() {
      return this.height * this.width;
    }
  }
  
  const rectangle = new Rectangle(5, 10);
  
  console.log(rectangle.area); // Output: 50

  
//   let and const:
// ES6 introduced two new keywords for declaring variables, let and const. let allows you to declare block-scoped variables that can be reassigned, while const allows you to declare variables that cannot be reassigned.

// let
let count = 0;
if (true) {
  let count = 1;
  console.log(count); // Output: 1
}
console.log(count); // Output: 0

// const
const PI = 3.14159;
// PI = 3; // Throws an error

// Spread and Rest Operators:
// ES6 introduced the spread and rest operators, which allow you to spread an array into individual elements and collect multiple elements into an array.

// Spread Operator
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6

// Rest Operator
const sumAll = (...args) => args.reduce((a, b) => a + b, 0);
console.log(sumAll(1, 2, 3)); // Output: 6

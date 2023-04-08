// In JavaScript, you can assign default values to variables using the || operator or the ?? nullish coalescing operator. Here's how:

// Using the || operator:

let myVar = someValue || defaultValue;


// In this example, the || operator is used to assign the value of someValue to myVar if someValue is truthy, or to assign the value of defaultValue if someValue is falsy.

let name = '';
let greeting = 'Hello, ' + (name || 'Guest');
console.log(greeting); // Output: Hello, Guest


// In this example, the name variable is falsy (it is an empty string), so the || operator assigns the default value 'Guest' to the greeting variable.

// Using the ?? nullish coalescing operator:

let myVar1 = someValue ?? defaultValue;

// In this example, the ?? operator is used to assign the value of someValue to myVar if someValue is not null or undefined, or to assign the value of defaultValue if someValue is null or undefined.

let age;
let myAge = age ?? 18;
console.log(myAge); // Output: 18

// In this example, the age variable is undefined, so the ?? operator assigns the default value 18 to the myAge variable.

// Both the || and ?? operators can be used to assign default values to variables in JavaScript, but the ?? operator is more strict in checking for null or undefined values, while the || operator considers falsy values such as '', 0, false, etc. as well.


// What are default parameters

// In E5, we need to depend on logical OR operators to handle default values of function parameters. Whereas in ES6, Default function parameters feature allows parameters to be initialized with default values if no value or undefined is passed. Let's compare the behavior with an examples,

//ES5
var calculateArea = function (height, width) {
    height = height || 50;
    width = width || 60;
  
    return width * height;
  };
  console.log(calculateArea()); //300

  //ES6
var calculateArea = function (height = 50, width = 60) {
    return width * height;
  };
  
  console.log(calculateArea()); //300
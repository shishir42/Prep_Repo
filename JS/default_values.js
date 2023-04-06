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

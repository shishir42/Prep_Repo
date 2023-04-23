// Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. Let's take an example to see this behavior,


function calculateSum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(calculateSum(...numbers)); // 6

//   In JavaScript, the spread operator (...) allows you to spread the elements of an array or an object literal into another array or object. The spread operator is a convenient way to copy, concatenate, or manipulate arrays and objects without modifying the original data. Here are some examples:

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5, 6];
console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]


// In this example, the spread operator is used to copy the elements of the numbers array into a new array, newNumbers. The spread operator is also used to add more elements (4, 5, and 6) to the newNumbers array.

// Spread an object:
const person = {
    name: 'John',
    age: 30
  };
  const newPerson = {
    ...person,
    email: 'john@example.com'
  };
  console.log(newPerson); // Output: {name: 'John', age: 30, email: 'john@example.com'}
  
//   In this example, the spread operator is used to copy the properties of the person object into a new object, newPerson. The spread operator is also used to add a new property (email) to the newPerson object.

// Spread arguments:

function sum(x, y, z) {
    return x + y + z;
  }
  const numbers = [1, 2, 3];
  console.log(sum(...numbers)); // Output: 6

//   In this example, the spread operator is used to pass the elements of the numbers array as arguments to the sum function. The spread operator "spreads" the elements of the array into separate arguments, so sum(...numbers) is equivalent to sum(1, 2, 3).

// The spread operator is a powerful feature of JavaScript that simplifies common programming tasks. You can use it to copy, concatenate, or manipulate arrays and objects in a flexible and efficient way.



[..."John Resig"];
// The output of the array is ['J', 'o', 'h', 'n', '', 'R', 'e', 's', 'i', 'g'] Explanation: The string is an iterable type and the spread operator within an array maps every character of an iterable to one element. Hence, each character of a string becomes an element within an Array.

// What are the differences between spread operator and rest parameter
// Rest parameter collects all remaining elements into an array. Whereas Spread operator allows iterables( arrays / objects / strings ) to be expanded into single arguments/elements. i.e, Rest parameter is opposite to the spread operator.

// What are the differences between arguments object and rest parameter
// There are three main differences between arguments object and rest parameters

// The arguments object is an array-like but not an array. Whereas the rest parameters are array instances.
// The arguments object does not support methods such as sort, map, forEach, or pop. Whereas these methods can be used in rest parameters.
// The rest parameters are only the ones that haven’t been given a separate name, while the arguments object contains all arguments passed to the function

// In JavaScript, the spread and rest operators are both denoted by three dots (...) but they are used in different contexts and have different purposes.

// Spread operator (...)
// The spread operator is used to expand an array or an iterable (e.g., string, map, set) into individual elements. It can be used in the following ways:

// To pass the elements of an array as separate arguments to a function:
const arr = [1, 2, 3];
console.log(...arr); // outputs: 1 2 3

function myFunc(a, b, c) {
  console.log(a, b, c);
}
myFunc(...arr); // outputs: 1 2 3

// To concatenate two or more arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); // outputs: [1, 2, 3, 4, 5, 6]

// To create a copy of an array:
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // outputs: [1, 2, 3]

// Rest operator (...)
// The rest operator is used to represent an indefinite number of arguments as an array. It can be used in the following ways:

// To pass a variable number of arguments to a function:

function myFunc(...args) {
  console.log(args);
}
myFunc(1, 2, 3); // outputs: [1, 2, 3]

// To extract the remaining elements of an array after some elements have been destructured:
const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr;
console.log(first, second); // outputs: 1 2
console.log(rest); // outputs: [3, 4, 5]

// To capture the rest of the arguments after some are explicitly named in a function definition:
function myFunc(a, b, ...rest) {
  console.log(a, b); // outputs: 1 2
  console.log(rest); // outputs: [3, 4, 5]
}
myFunc(1, 2, 3, 4, 5);

// In summary, the spread operator is used to expand an array or an iterable into individual elements, while the rest operator is used to represent an indefinite number of arguments as an array.


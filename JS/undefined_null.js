// The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.

var user; // Value is undefined, type is undefined
console.log(typeof user); //undefined

// In JavaScript, undefined and null are two special values that indicate the absence of a value.

// undefined is a primitive value that is automatically assigned to a variable that has been declared but has not been assigned a value. For example:

let x;
console.log(x); // Output: undefined

// null, on the other hand, is an object that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property should be empty. For example:

let y = null;
console.log(y); // Output: null

//It's important to note that undefined and null are not the same as an empty string '', 0, false, or an empty array []. An empty string, for example, is a string value with no characters, while null is a special value that indicates the absence of any object value.

// It's also worth noting that undefined and null are falsy values, meaning they are considered false when evaluated in a boolean context.

var user = null;
console.log(typeof user); //object


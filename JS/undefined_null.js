// The undefined property indicates that a variable has not been assigned a value, or declared but not initialized at all. The type of undefined value is undefined too.

// The undefined value is a primitive value used when a variable has not been assigned a value.

var user; // Value is undefined, type is undefined
console.log(typeof user); //undefined

// In JavaScript, undefined and null are two special values that indicate the absence of a value.

// undefined is a primitive value that is automatically assigned to a variable that has been declared but has not been assigned a value. For example:

let x;
console.log(x); // Output: undefined

// null, on the other hand, is an object that represents the intentional absence of any object value. It is often used to indicate that a variable should have no value or that an object property should be empty. For example:

// The null value is a primitive value that represents the null, empty, or non-existent reference.

let y = null;
console.log(y); // Output: null

//It's important to note that undefined and null are not the same as an empty string '', 0, false, or an empty array []. An empty string, for example, is a string value with no characters, while null is a special value that indicates the absence of any object value.

// It's also worth noting that undefined and null are falsy values, meaning they are considered false when evaluated in a boolean context.

var user = null;
console.log(typeof user); //object

// https://www.scaler.com/topics/javascript/null-and-undefined-in-javascript/

// In JavaScript, null and undefined are two distinct values that indicate different things.

// undefined means a variable has been declared but has not yet been assigned a value. It is also the default value of function arguments that are not provided with a value. Here's an example:

let foo;
console.log(foo); // undefined

function bar(arg) {
  console.log(arg); // undefined
}

bar();

// In the above example, we declare a variable foo but don't assign it a value, so it has the value of undefined. We also define a function bar that takes an argument arg but doesn't provide a value for it, so arg has the value of undefined.

// null, on the other hand, is an explicitly assigned value that represents the absence of any object value. It can be used to indicate that a variable has no value or that an object property is intentionally empty. Here's an example:

let foo = null;
console.log(foo); // null

let obj = { prop: null };
console.log(obj.prop); // null

// In the above example, we assign the value of null to the variable foo, indicating that it intentionally has no value. We also define an object obj with a property prop that has the value of null, indicating that the property is intentionally empty.

// In summary, undefined means a value has not been assigned to a variable or function argument, while null means a variable or object property intentionally has no value.


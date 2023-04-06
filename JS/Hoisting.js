// Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

// The above code looks like as below to the interpreter,

var message;
console.log(message);
message = "The variable Has been hoisted";

// Note that hoisting can lead to unexpected behavior and can make code difficult to read and maintain. It is generally recommended to declare variables and functions at the beginning of their respective scopes to avoid any confusion.


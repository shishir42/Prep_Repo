// An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

// function (optionalParameters) {
//     //do something
//   }

//   const myFunction = function(){ //Anonymous function assigned to a variable
//     //do something
//   };

//   [1, 2, 3].map(function(element){ //Anonymous function used as a callback function
//     //do something
//   });


var x = function (a, b) {
  return a * b;
};
var z = x(5, 10);
console.log(z); // 50

// Anonymous functions, also known as lambda expressions, have several advantages over named functions:

// Conciseness: Anonymous functions allow you to write shorter and more readable code, as you don't have to define a separate named function. This is especially useful for small, one-time use functions.

// Flexibility: Anonymous functions can be passed as arguments to other functions or stored in variables, which makes them more flexible and versatile than named functions.

// Closures: Anonymous functions can capture variables from their enclosing scope, creating closures that allow you to share state between different parts of your code. This can be useful for implementing callbacks, event handlers, or other asynchronous programming patterns.

// Improved performance: In some cases, using anonymous functions can lead to better performance than using named functions, as they can be inlined by the compiler and avoid the overhead of calling a separate function.

// Overall, anonymous functions are a powerful tool that can help you write more expressive, flexible, and efficient code in a wide range of programming scenarios.
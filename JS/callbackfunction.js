// A callback function is a function passed into another function as an argument. This function is invoked inside the outer function to complete an action. Let's take a simple example of how to use callback function

function callbackFunction(name) {
  console.log("Hello " + name);
}

function outerFunction(callback) {
  let name = prompt("Please enter your name.");
  callback(name);
}

outerFunction(callbackFunction);

//   Callbacks are an essential concept in JavaScript because they allow you to execute code after another operation has completed. In JavaScript, many operations are asynchronous, meaning that they take some time to complete and don't block the execution of the rest of the code. Examples of asynchronous operations in JavaScript include making an HTTP request, reading from a file, or waiting for user input.

// When you make an asynchronous operation in JavaScript, you don't want to block the execution of the rest of the code. Instead, you want to provide a function (i.e., a callback) that will be called when the operation completes. The callback function is executed when the operation is finished, allowing you to perform some action with the result of the operation or handle any errors that occurred.

// Callbacks are particularly useful when working with APIs, libraries, or frameworks that rely heavily on asynchronous operations. For example, when using jQuery to make an AJAX request, you can provide a callback function that will be called when the request completes. Similarly, when working with Node.js, you can use callbacks to handle the result of an asynchronous operation, such as reading from a file.

// Overall, callbacks are an important concept in JavaScript because they allow you to write asynchronous code that is non-blocking and efficient.

function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();

Output;
// Second function called
// First function called

//   Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {
        //
      });
    });
  });
});

// There are several ways to resolve Callback Hell:

// Use Promises: Promises are a cleaner alternative to callbacks, allowing you to chain multiple asynchronous operations together without the need for nested callbacks. Promises simplify asynchronous code and make it more readable.

// Use Async/Await: Async/await is a modern JavaScript feature that simplifies asynchronous code even further. It allows you to write asynchronous code that looks and behaves like synchronous code. Async/await relies on Promises and provides a cleaner and more intuitive syntax for working with them.

// Modularize your code: You can break your code into smaller modules and functions, each responsible for a single task. This helps to reduce the complexity of your code and make it more manageable. Additionally, you can use modules and libraries to handle common tasks, such as making HTTP requests, instead of writing custom code.

// Use Control Flow Libraries: There are several control flow libraries, such as Async.js and Bluebird, that provide a more structured approach to handling asynchronous operations. These libraries provide functions for handling common tasks, such as parallel execution, series execution, and error handling.
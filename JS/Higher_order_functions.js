// Higher-order functions
// Higher-order functions are functions that take other functions as arguments and/or return functions as values. In JavaScript, functions are first-class citizens, which means that they can be treated like any other value, including being passed around as arguments and returned from other functions. This makes it possible to create higher-order functions, which offer several advantages:

// Abstraction: Higher-order functions allow you to abstract away complex behavior into simple and reusable functions. For example, you can write a function that takes a function to filter an array, rather than writing the filtering logic in each specific use case.

// Code reuse: By creating higher-order functions that can be reused in different parts of your codebase, you can save time and reduce the amount of code you need to write.

// Flexibility: Higher-order functions make your code more flexible and adaptable to different use cases, since you can pass in different functions to achieve different behavior.

// Composition: Higher-order functions enable function composition, which is the process of combining smaller functions into larger ones. This can make it easier to reason about complex code and make changes to it in the future.

// Asynchronous programming: Higher-order functions can be used to handle asynchronous behavior by taking callbacks as arguments. This is commonly used in JavaScript for tasks like handling events and making API requests.

// Here's an example of a higher-order function in JavaScript that takes a function as an argument to perform an operation on each element of an array:

function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  forEach(numbers, function(number) {
    console.log(number * 2);
  });

  
// In this example, forEach is a higher-order function that takes an array and a callback function as arguments. It then iterates over each element of the array and applies the callback function to it. This enables you to easily perform different operations on each element of the array, depending on the callback function that you pass in. 


// Abstraction is a key advantage of higher-order functions in JavaScript. Abstraction involves hiding the implementation details of a function or a piece of code and exposing only the essential features and functionalities to the users. This allows developers to write more modular and reusable code, as well as to make the code more readable and easier to maintain.

// In the context of higher-order functions, abstraction means encapsulating a complex operation or functionality in a function that takes another function as an argument. This allows you to abstract away the details of the operation and provide a simpler and more generalized interface to the user.

// For example, let's consider the map function in JavaScript. The map function is a higher-order function that takes an array and a callback function as arguments. It applies the callback function to each element of the array and returns a new array with the results. Here's an example:

const numbers1 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers1.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// In this example, the map function abstracts away the details of iterating over the array and applying the callback function to each element. The user only needs to provide the callback function that specifies how to transform each element, and the map function takes care of the rest.

// By using higher-order functions to encapsulate complex operations, you can create more modular and reusable code that is easier to read and maintain. This can make your codebase more flexible and adaptable to changing requirements, as well as making it easier to reason about and debug.

// Higher-order functions and first-class functions are related concepts in JavaScript, but they are not the same thing.

// First-class functions refer to the ability to treat functions as first-class citizens in a programming language. This means that functions can be assigned to variables, passed as arguments to other functions, and returned as values from functions. In JavaScript, functions are first-class citizens, which means that they can be treated just like any other value.

// Higher-order functions, on the other hand, are functions that take other functions as arguments and/or return functions as values. This means that a higher-order function is a function that operates on functions, either by accepting functions as arguments, returning functions, or both. By using higher-order functions, you can create more modular and reusable code, as well as achieve greater flexibility and abstraction.

// First-class function
function greet(name) {
    console.log(`Hello, ${name}!`);
  }
  
  const greetUser = greet;
  greetUser('Alice'); // Output: Hello, Alice!
  
  // Higher-order function
  function repeat(func, times) {
    for (let i = 0; i < times; i++) {
      func();
    }
  }
  
  repeat(greetUser, 3); // Output: Hello, Alice! Hello, Alice! Hello, Alice!

// n this example, greet is a first-class function, as it can be assigned to a variable and passed as an argument to another function. greetUser is a variable that holds a reference to the greet function, which can be called just like any other function.

// repeat is a higher-order function, as it takes a function (func) as an argument and uses it to perform some operation. In this case, the repeat function calls the func function multiple times based on the times argument passed to it. In the example, greetUser is passed as the func argument to the repeat function, so it is called three times to output "Hello, Alice!" three times.  

// In summary, while both first-class functions and higher-order functions are important concepts in JavaScript, they refer to different aspects of function behavior. First-class functions refer to the ability to treat functions as values, while higher-order functions refer to the ability to operate on functions.
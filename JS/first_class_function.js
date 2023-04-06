// In JavaScript, functions are considered first-class citizens, which means that they are treated like any other value. This allows functions to be passed around as arguments to other functions, returned from functions, and stored in variables or data structures.

// Some examples of using functions as first-class citizens in JavaScript include:

// 1.Passing a function as an argument to another function:
function sayHello(name) {
    console.log(`Hello, ${name}!`);
  }
  
  function greet(greeting, name) {
    greeting(name);
  }
  
  greet(sayHello, 'John'); // Output: Hello, John!


// In this example, we're passing the sayHello function as an argument to the greet function, which then calls it with the name "John". This allows us to pass different functions as the greeting parameter to achieve different behavior.  
  
  //2. Returning a function from a function:

  function createGreeter(greeting) {
    return function(name) {
      console.log(`${greeting}, ${name}!`);
    }
  }
  
  const sayHi = createGreeter('Hi');
  const sayHello = createGreeter('Hello');
  
  sayHi('John'); // Output: Hi, John!
  sayHello('Mary'); // Output: Hello, Mary!

//   In this example, we're returning a function from the createGreeter function, which takes a greeting parameter and returns a new function that takes a name parameter and logs the greeting. We can then assign the returned functions to variables and use them to greet different people.

//3. Storing functions in variables or data structures:

const myFunctions = {
    add: function(x, y) { return x + y; },
    subtract: function(x, y) { return x - y; },
    multiply: function(x, y) { return x * y; },
    divide: function(x, y) { return x / y; }
  };
  
  console.log(myFunctions.add(2, 3)); // Output: 5
  console.log(myFunctions.multiply(4, 5)); // Output: 20

// In this example, we're storing functions as properties of an object, which allows us to access and call them by name.

// The ability to treat functions as first-class citizens is a powerful feature of JavaScript, which allows for more flexible and expressive code.  


//The advantages of first-class functions in JavaScript are numerous and can greatly improve the flexibility and power of your code. Some of the key advantages include:

// Higher-order functions: With first-class functions, it's possible to write higher-order functions that take functions as arguments or return functions as values. This allows for more flexible and expressive code that can be easily customized and adapted to different situations.

// Function composition: First-class functions make it easier to compose functions together to create more complex behavior. By combining smaller functions into larger ones, you can create a more modular and reusable codebase.

// Callbacks: First-class functions enable the use of callbacks, which are functions that are passed as arguments to other functions and executed at a later time. This can be used to implement asynchronous behavior, handle events, and more.

// Closures: First-class functions enable the creation of closures, which are functions that have access to variables in their parent scope. This can be used to create private variables and functions, as well as to implement advanced techniques like memoization and currying.

// Function factories: First-class functions can be used to create function factories, which are functions that generate other functions. This can be used to create specialized functions for specific use cases, or to create functions that are customized for different environments.

// Overall, the advantages of first-class functions in JavaScript make them a powerful tool for writing flexible, modular, and reusable code. By embracing the power of first-class functions, you can create code that is easier to read, easier to maintain, and more adaptable to changing requirements.
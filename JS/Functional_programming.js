// Functional programming is a programming paradigm that emphasizes the use of pure functions, immutability, and the avoidance of side effects. JavaScript, being a multi-paradigm language, supports functional programming, and it has become increasingly popular in recent years.

// Here are some key features of functional programming in JavaScript:

// Pure functions: Functions that don't have side effects, don't mutate data, and always return the same output given the same input are considered pure functions. They're predictable and easier to test and debug.

// Immutable data: In functional programming, data is not meant to be modified after it's created. Instead, a new copy of the data is created each time a change is made.

// Higher-order functions: Functions that take other functions as arguments or return functions as output are known as higher-order functions. They allow for code reuse and abstraction.

// Function composition: Breaking down a complex problem into smaller functions and composing them together is a common practice in functional programming. This helps to keep the code modular and reusable.

// Recursion: Recursion is a technique that involves calling a function within itself. It's often used in functional programming to perform repetitive tasks.

function add(a, b) {
    return a + b;
  }

  
//   This function takes two arguments and returns their sum, without modifying any data or having any side effects.

function multiplyBy(factor) {
    return function(number) {
      return number * factor;
    }
  }
  
  const double = multiplyBy(2);
  const triple = multiplyBy(3);
  
  console.log(double(5)); // 10
  console.log(triple(5)); // 15

  
//   In this example, the multiplyBy function is a higher-order function that returns a new function that multiplies a number by a given factor. We can then use the returned functions double and triple to multiply a number by 2 or 3 respectively. This allows for code reuse and abstraction.

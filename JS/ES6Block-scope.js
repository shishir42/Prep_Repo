// ES6 (also known as ECMAScript 2015) introduced block-scoped variables, constants, and functions to JavaScript. Before ES6, variables and functions declared inside a block (such as an if statement or a for loop) were scoped to the nearest function or global scope, which could lead to unexpected behavior.


// With ES6, you can use the let and const keywords to declare block-scoped variables and constants. Variables declared with let are mutable and can be reassigned, while variables declared with const are immutable and cannot be reassigned. For example:

function myFunction() {
    let x = 10; // Block-scoped variable
    const y = 20; // Block-scoped constant
    
    if (true) {
      let x = 5; // New block-scoped variable with the same name
      const z = 30; // New block-scoped constant with a different name
      
      console.log(x); // 5
      console.log(y); // 20
      console.log(z); // 30
    }
    
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // ReferenceError: z is not defined
  }

//   ES6 also allows you to declare block-scoped functions using the function keyword. However, this feature is not widely used and is generally discouraged, as it can lead to confusion and unexpected behavior. Instead, it's recommended to use arrow functions or declare functions at the top level of a module.
// Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

// There are two types of scope in JavaScript: global scope and local scope.

// Global scope refers to variables or functions that can be accessed from anywhere in the code, including inside functions or nested code blocks. Global variables and functions are declared outside of any function or code block.

let greeting = "Hello"; // Global variable

function greet() {
  console.log(greeting); // Accessing global variable inside function
}

greet(); // Output: "Hello"


// In this example, the variable greeting is declared outside of the function greet(), which makes it a global variable. The function can access the global variable and output its value.

// Local scope, on the other hand, refers to variables or functions that can only be accessed within a specific function or code block. Local variables and functions are declared inside a function or code block using the let, const, or var keywords.

function greet() {
    let greeting = "Hello"; // Local variable
    console.log(greeting);
  }
  
  greet(); // Output: "Hello"
  console.log(greeting); // Error: greeting is not defined

  
//   In this example, the variable greeting is declared inside the function greet(), which makes it a local variable. The variable cannot be accessed outside of the function, which causes an error when trying to output its value outside of the function.

// It's important to be aware of scope when writing JavaScript code, as it can affect how variables and functions are accessed and used in different parts of the code.


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

// What is the output of below for loops

for (var i = 0; i < 4; i++) {
  // global scope
  setTimeout(() => console.log(i));
}

for (let i = 0; i < 4; i++) {
  // block scope
  setTimeout(() => console.log(i));
}

// The output of the above for loops is 4 4 4 4 and 0 1 2 3

// Explanation: Due to the event queue/loop of javascript, the setTimeout callback function is called after the loop has been executed. Since the variable i is declared with the var keyword it became a global variable and the value was equal to 4 using iteration when the time setTimeout function is invoked. Hence, the output of the first loop is 4 4 4 4.

// Whereas in the second loop, the variable i is declared as the let keyword it becomes a block scoped variable and it holds a new value(0, 1 ,2 3) for each iteration. Hence, the output of the first loop is 0 1 2 3.
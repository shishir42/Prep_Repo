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

// Lexical Scope:
// Lexical scope is also known as static scope. It refers to the scope of a variable or function determined by its position within the code. In other words, the scope is determined by where the variable or function is declared. Variables declared within a function have local scope, meaning they can only be accessed within that function and its nested functions. Variables declared outside of any function have global scope and can be accessed from anywhere in the code.

function foo() {
  var x = 1;
  function bar() {
    console.log(x); // Output: 1
  }
  bar();
}
foo();

// In the example above, the variable x is declared within the function foo, so it has a lexical scope that is limited to the foo function and its nested functions. The bar function is nested within foo and has access to the x variable because of lexical scoping.

// Global Scope:
// Global scope refers to variables or functions that are declared outside of any function. Variables declared in the global scope can be accessed from anywhere in the code, including within functions.

var x = 1;

function foo() {
  console.log(x); // Output: 1
}

foo();

// In the example above, the variable x is declared in the global scope, so it can be accessed from anywhere in the code, including within the foo function.

//Block Scope:
// Block scope refers to the scope of a variable or constant that is limited to the block of code in which it is declared. In JavaScript, variables declared with let and const have block scope. A block is defined by a pair of curly braces {}.

function foo() {
  if (true) {
    let x = 1;
    const y = 2;
    console.log(x, y); // Output: 1, 2
  }
  console.log(x, y); // Error: x and y are not defined
}
foo();

// In the above example, x and y are declared inside the if block and have block scope that is limited to that block. They cannot be accessed outside the block. If we try to access them outside the block, we will get a reference error.

// In summary, lexical scope is determined by the position of a variable or function within the code, while block scope is determined by the block of code in which a variable or constant is declared.
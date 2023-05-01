// In JavaScript, error handling and exception handling are important concepts for handling unexpected or exceptional situations that may occur during program execution. The try-catch statement is used to handle errors and exceptions in JavaScript.

// Here is an example of error handling and exception handling in JavaScript:

try {
    // code that may throw an error
    let x = y + z;
  } catch (error) {
    // code to handle the error
    console.log("An error occurred: " + error.message);
  }

  
//   In this example, the try block contains code that may throw an error. If an error occurs, the catch block will be executed, and the error object will be passed to it. The catch block can then handle the error as needed, such as by logging an error message to the console.

// Here is an example of a custom exception in JavaScript:

function CustomException(message) {
    this.message = message;
    this.name = "CustomException";
  }
  
  try {
    // code that may throw a custom exception
    throw new CustomException("Something went wrong");
  } catch (error) {
    // code to handle the custom exception
    console.log("An error occurred: " + error.message);
  }

//   In this example, a custom exception CustomException is defined with a message property and a name property. The throw statement is used to throw a new instance of the CustomException. If the catch block catches the exception, it can handle it using the message property.


// A stack trace is a list of function calls that shows the path of execution that led to an error or exception in JavaScript. It is a useful tool for debugging and understanding the flow of program execution.

// In JavaScript, when an error or exception is thrown, the JavaScript engine creates a stack trace by recording the call stack at the time the error occurred. The call stack is a data structure that keeps track of the function calls in a program. Each time a function is called, its information is added to the top of the stack. When the function returns, its information is removed from the stack.

function functionA() {
    throw new Error("Error in functionA");
  }
  
  function functionB() {
    functionA();
  }
  
  function functionC() {
    functionB();
  }
  
  try {
    functionC();
  } catch (error) {
    console.log(error.stack);
  }

  
//   In this example, the functionA function throws an error, and it is called by functionB, which is called by functionC. The try-catch block catches the error, and the stack trace is logged to the console using the stack property of the Error object.

// Error: Error in functionA
// at functionA (<anonymous>:2:9)
// at functionB (<anonymous>:6:3)
// at functionC (<anonymous>:10:3)
// at <anonymous>:14:3

// How do you declare namespace
// Even though JavaScript lacks namespaces, we can use Objects , IIFE to create namespaces.

// Using Object Literal Notation: Let's wrap variables and functions inside an Object literal which acts as a namespace. After that you can access them using object notation

var namespaceOne = {
    func1:  function() {
        console.log("This is a first definition");
    }
 }
 var namespaceTwo = {
      func1: function(){
        console.log("This is a second definition");
      }
  }
 namespaceOne.func1(); // This is a first definition
 namespaceTwo.func1(); // This is a second definition

//Using IIFE (Immediately invoked function expression): The outer pair of parentheses of IIFE creates a local scope for all the code inside of it and makes the anonymous function a function expression. Due to that, you can create the same function in two different function expressions to act as a namespace.

(function () {
    function fun1() {
      console.log("This is a first definition");
    }
    fun1();
  })();
  
  (function () {
    function fun1() {
      console.log("This is a second definition");
    }
    fun1();
  })();

//   Using a block and a let/const declaration: In ECMAScript 6, you can simply use a block and a let declaration to restrict the scope of a variable to a block.

{
    let myFunction = function fun1() {
      console.log("This is a first definition");
    };
    myFunction();
  }
  //myFunction(): ReferenceError: myFunction is not defined.
  
  {
    let myFunction = function fun1() {
      console.log("This is a second definition");
    };
    myFunction();
  }
  //myFunction(): ReferenceError: myFunction is not defined.


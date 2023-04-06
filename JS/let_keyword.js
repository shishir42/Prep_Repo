// The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope.

let counter = 30;
if (counter === 30) {
  let counter = 31;
  console.log(counter); // 31
}
console.log(counter); // 30 (because the variable in if block won't exist here)

// var
// It is been available from the beginning of JavaScript	
// It has function scope	
// Variables will be hoisted	

// let
// Introduced as part of ES6
// It has block scope
// Hoisted but not initialized

function userDetails(username) {
    if (username) {
      console.log(salary); // undefined due to hoisting
      console.log(age); // ReferenceError: Cannot access 'age' before initialization
      let age = 30;
      var salary = 10000;
    }
    console.log(salary); //10000 (accessible to due function scope)
    console.log(age); //error: age is not defined(due to block scope)
  }
  userDetails("John");
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

  //Can I redeclare let and const variables

  // No, you cannot redeclare let and const variables. If you do, it throws below error

// Uncaught SyntaxError: Identifier 'someVariable' has already been declared

// Explanation: The variable declaration with var keyword refers to a function scope and the variable is treated as if it were declared at the top of the enclosing scope due to hoisting feature. So all the multiple declarations contributing to the same hoisted variable without any error. Let's take an example of re-declaring variables in the same scope for both var and let/const variables.

var name = "John";
function myFunc() {
  var name = "Nick";
  var name = "Abraham"; // Re-assigned in the same function block
  alert(name); // Abraham
}
myFunc();
alert(name); // John

// The block-scoped multi-declaration throws syntax error,

let name = "John";
function myFunc() {
  let name = "Nick";
  let name = "Abraham"; // Uncaught SyntaxError: Identifier 'name' has already been declared
  alert(name);
}

myFunc();
alert(name);

// Is const variable makes the value immutable

// No, the const variable doesn't make the value immutable. But it disallows subsequent assignments(i.e, You can declare with assignment but can't assign another value later)

const userList = [];
userList.push("John"); // Can mutate even though it can't re-assign
console.log(userList); // ['John']
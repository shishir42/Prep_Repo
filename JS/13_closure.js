// Closures are a powerful feature in JavaScript that allow inner functions to access outer function variables and parameters even after the outer function has returned. Here are some of the main features of closures:

// A closure is a function having access to the parent scope, even after the parent function has executed.

// A closure is the combination of a function and 
// the lexical environment within which that function was declared. 
// i.e, It is an inner function that has access to the outer or enclosing function’s variables. 

// The closure has three scope chains

// Own scope where variables defined between its curly brackets
// Outer function’s variables
// Global variables

// In JavaScript, a lexical environment is the set of variables and their values that are accessible from a certain point in the code during the runtime.

// A lexical environment is created every time a function is executed, and it consists of two parts:

// The Environment Record: It's an object that contains all the variables, functions, and their values declared within the scope of the function. The environment record also includes a reference to the outer lexical environment where the function was defined (if any).

// A reference to the outer lexical environment: This is a reference to the environment where the function was defined, also known as the scope chain. The reference to the outer environment allows the function to access variables and functions declared in the outer scope.

// The lexical environment determines which variables and functions are accessible to a particular piece of code, and it's essential for understanding the scope and closure mechanisms in JavaScript.

function Welcome(name){
    var greetingInfo = function(message){
        console.log(message + " " + name);
    }

    return greetingInfo;
}

var myFunction = Welcome("John");
myFunction("Welcome");
myFunction("Hello Mr.");

// As per the above code, the inner function(i.e, greetingInfo)
// has access to the variables in the outer function scope(i.e, Welcome) 
// even after the outer function has returned.

// Closures are a powerful feature in JavaScript that allow inner functions to access outer function variables and parameters even after the outer function has returned. Here are some of the main features of closures:

// 1. Encapsulation: Closures allow you to encapsulate variables and functions within a scope, which can help prevent naming conflicts and improve code organization.

function createCounter() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  const counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); // Output: 2
  
//   In this example, createCounter() is a closure that encapsulates the count variable and returns an object with three methods that can access and modify the count variable. This allows us to create multiple counters that don't interfere with each other.

// 2. Private variables and functions: By creating a closure, you can create private variables and functions that are not accessible from outside the closure. This can be useful for creating modules and protecting sensitive data.

// example: Private variables and functions:

function createPerson(name, age) {
    let _name = name;
    let _age = age;
  
    function getAge() {
      return _age;
    }
  
    return {
      getName: function() {
        return _name;
      },
      sayHello: function() {
        console.log(`Hello, my name is ${_name} and I'm ${getAge()} years old.`);
      }
    };
  }
  
  const person = createPerson("John", 30);
  console.log(person.getName()); // Output: "John"
  person.sayHello(); // Output: "Hello, my name is John and I'm 30 years old."
  console.log(person._name); // Output: undefined
  console.log(person._age); // Output: undefined

  
//  In this example, createPerson() is a closure that creates a private _name and _age variable, and returns an object with two methods that can access these private variables but not modify them directly.

//  3. Access to outer function variables: Closures allow inner functions to access outer function variables and parameters, even after the outer function has returned. This is because the inner function has access to the scope chain of the outer function.

function createCounter() {
    let count = 0;
  
    function increment() {
      count++;
      console.log(count);
    }
  
    return increment;
  }
  
  const counter1 = createCounter();
  counter1(); // Output: 1
  counter1(); // Output: 2

//   In this example, createCounter() is a closure that creates a private count variable and returns a function increment() that has access to this variable. Each time increment() is called, it increments the count variable and logs its value to the console.

//  4. Persistent state: Closures can be used to create functions that maintain state between calls. This is because the variables and functions declared within the closure are not reinitialized each time the closure is called.

function createAdder(initialValue) {
    let sum = initialValue;
  
    function add(number) {
      sum += number;
      console.log(sum);
    }
  
    return add;
  }
  
  const addFive = createAdder(5);
  addFive(3); // Output: 8
  addFive(2); // Output: 10
  const addTen = createAdder(10);
  addTen(5); // Output: 15
  addFive(1); // Output: 11


//   In this example, createAdder() is a closure that creates a private sum variable and returns a function add() that has access to this variable. Each time add() is called, it adds the input number to the sum variable and logs its value to the console. Since the sum variable is persistent between calls, we can create multiple functions that use the same sum variable.
  
  // 5. Callbacks: Closures are often used to create callbacks in JavaScript, where a function is passed as an argument to another function and then executed later. The inner function can access variables and functions from the outer function, even if the outer function has already returned.

  function loadData(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error(error));
  }
  
  function displayData(data) {
    console.log(data);
  }
  
  loadData('https://jsonplaceholder.typicode.com/todos/1', displayData);
  
// In this example, the loadData function accepts a URL and a callback function as arguments. When the data is fetched, the callback function is called with the returned data as an argument. This allows us to use closures to create flexible and reusable code that can be used in a variety of different contexts.

// 6. Memory efficiency: Closures can be used to create functions that share common variables and functions, which can help reduce memory usage and improve performance.

function outerFunction() {
    const bigArray = new Array(1000000).fill(0); // create a big array
    return function innerFunction() {
      console.log(bigArray[0]); // access bigArray from outer function
    }
  }
  
  const innerFunc = outerFunction(); // call outer function to get inner function
  innerFunc(); // call inner function to access bigArray

  
//   In this example, outerFunction creates a big array and then returns an inner function that can access that array. Because the inner function has access to the bigArray variable, we don't need to pass the array as a parameter or store it in a global variable, which can save memory.

// Without closures, we might have to pass the bigArray variable as a parameter to innerFunction, like this:

function innerFunction(bigArray) {
    console.log(bigArray[0]);
  }
  
  const bigArray = new Array(1000000).fill(0); // create a big array
  innerFunction(bigArray); // pass bigArray to inner function

  
//   This would require us to store the bigArray variable somewhere outside of innerFunction, which could take up additional memory.

// So in summary, closures can help improve memory efficiency by allowing inner functions to access variables from outer functions, which can avoid the need to store those variables in memory elsewhere.
// A closure is a function that has access to variables in its outer lexical environment, even after the outer function has returned. This happens because the closure "closes over" (or captures) the variables from the outer scope, allowing them to be used within the closure.

// A closure has three scopes:

// Its own scope (the variables defined inside the closure function)
// The outer function's scope (the variables defined in the outer function that are captured by the closure)
// The global scope (the variables defined outside all functions)

function outer() {
  var x = 10;

  function inner() {
    var y = 20;
    console.log(x + y);
  }

  return inner;
}

var closure = outer(); // closure now references the inner function

closure(); // logs 30

// In this example, the inner function is defined inside the outer function, so it has access to the x variable in the outer function's scope. When outer is called, it returns the inner function, which is assigned to the closure variable. When closure is called, it logs the sum of x and y, which are defined in different scopes.

// So, the three scopes of the closure are:

// The inner function's scope (where y is defined)
// The outer function's scope (where x is defined and captured by the closure)
// The global scope (where the closure variable is defined and where console.log is defined)

var x = 10;

function foo() {
  console.log(x); // 10
}

foo();

// In above will var x is closure scope 

// No, in this example, x is not a closure scope variable. It is defined in the global scope (outside of any function) and can be accessed by any function defined in the same scope or any nested scopes.

// The foo function has access to the x variable because it is defined in the same scope as x. When foo is called, it logs the value of x, which is 10.

// A closure variable is a variable that is defined in an outer function's scope and is used by an inner function. It is not accessible outside of the closure (unless explicitly exposed through a closure function's return value or an object property). In the example you provided, x is not a closure variable because it is defined in the same scope as foo, not in an outer scope.

// Here are some common problems with closures in JavaScript:
// Memory leaks: Closures can hold references to variables in their enclosing function's scope, which can prevent those variables from being garbage collected when the enclosing function is no longer needed. This can lead to memory leaks, especially if the closure is used in a long-running application.

// Unexpected behavior with loops: Closures can also lead to unexpected behavior when used inside loops. If a closure references a loop variable, it will capture the value of the variable at the time the closure is created, not the value of the variable at the time the closure is executed. This can lead to bugs if you're not aware of how closures work in this context.

// Security concerns: Closures can be used to create private variables and functions in JavaScript, which can be a useful technique for encapsulating implementation details. However, it's important to be aware that closures can also be used to create hidden side effects or access sensitive information, which can be a security concern in some contexts.

// Here's an example of a closure that can lead to a memory leak:

function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter_1 = createCounter();

// Call the counter function repeatedly
for (let i = 0; i < 1000000; i++) {
  counter_1();
}

// In this example, we have a function createCounter() that returns a closure that increments a count variable and logs its value to the console. We then call createCounter() to create a new closure and store it in the counter variable. Finally, we call the counter() function in a loop a million times.

// The problem with this code is that the count variable is captured by the closure and will persist in memory as long as the closure exists. In this case, we're creating a million closures that all reference the same count variable, which can lead to a significant memory leak.

// To avoid this problem, you can manually release the closure's reference to the count variable by setting it to null when you're done with it:

function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
    if (count === 1000000) {
      count = null;
    }
  };
}

const counter_2 = createCounter();

// Call the counter function repeatedly
for (let i = 0; i < 1000000; i++) {
  counter_2();
}

// In this updated version of the code, we've added a check to the closure to set count to null when it reaches a certain value. This allows the count variable to be garbage collected once all the closures have finished executing, preventing the memory leak.

// One common problem with closures in JavaScript is that they can lead to unexpected behavior when used inside loops. If a closure references a loop variable, it will capture the value of the variable at the time the closure is created, not the value of the variable at the time the closure is executed. This can lead to bugs if you're not aware of how closures work in this context.

// Here's an example of how closures can cause problems with loops in JavaScript:

for (var i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// In this example, we have a for loop that creates five setTimeout functions that each log the value of i to the console after a delay of one second. We might expect this code to output the numbers 1 through 5, one per second. However, when we run this code, we get the number 6 printed to the console five times, after a delay of one second each.

// The reason for this unexpected behavior is that the setTimeout functions are closures that capture the value of i at the time they are created. When the loop finishes, i has a value of 6, so all the closures log the value 6 to the console.

// To fix this problem, we need to create a new scope for each iteration of the loop so that the closure captures the value of i at the time the closure is created. One way to do this is to use an immediately invoked function expression (IIFE) to create a new scope for each iteration:

for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}

// In this updated version of the code, we've wrapped the setTimeout function in an IIFE that takes i as a parameter and immediately invokes it with the current value of i. This creates a new scope for each iteration of the loop, and the closure inside the setTimeout function captures the value of j at the time the closure is created.

// Now when we run this code, we get the expected output of the numbers 1 through 5, one per second.

// Yes, you can fix the problem of closures in a for loop by replacing var with let. This is because let has block scope, meaning it is scoped to the nearest enclosing block (in this case, the for loop), whereas var has function scope, meaning it is scoped to the nearest enclosing function (in this case, the global scope).

// Here's an example of how to fix the closure problem using let:

for (let i = 1; i <= 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// In this version of the code, we've used let instead of var to declare the loop variable i. This means that i is scoped to the for loop block, and a new i is created for each iteration of the loop. The closure created by the setTimeout function captures the value of i at the time the closure is executed, which is what we want.

// Now when we run this code, we get the expected output of the numbers 1 through 5, one per second.

// Note that if you're using a version of JavaScript that doesn't support let, you can still use the IIFE solution I mentioned earlier to fix the closure problem.

//closures can also pose some security concerns if not used carefully. One such concern is the exposure of private data through closure references. Here's an example:

function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  };
}

let counter_3 = createCounter();

counter_3(); // Output: 1
counter_3(); // Output: 2

// In this example, we have a function createCounter that returns another function that increments and logs a private variable count each time it's called. The outer function createCounter is executed once, and its inner function is returned and assigned to the variable counter. When counter is called multiple times, it logs the incremented value of count to the console.

// The problem with this code is that the private variable count is not truly private. Since the inner function created by createCounter is a closure, it has a reference to the count variable in the outer function's scope. This means that the count variable is not garbage collected when createCounter finishes executing, and the inner function can still access it.

// An attacker who has access to the counter function could potentially use this closure reference to access and modify the private count variable, leading to unexpected behavior in the application.

// To mitigate this security concern, we can use the module pattern, which uses an immediately invoked function expression (IIFE) to create a private scope for the variables and functions that should not be exposed to the global scope or other parts of the application:

let counter_4 = (function() {
  let count = 0;

  return {
    increment: function() {
      count++;
      console.log(count);
    }
  };
})();

counter_4.increment(); // Output: 1
counter_4.increment(); // Output: 2

// In this version of the code, we've wrapped the counter logic in an IIFE that creates a private scope for the count variable and the increment function. The IIFE returns an object with a single public method increment that increments and logs the private count variable. The private count variable is not exposed to the global scope or other parts of the application, so it cannot be accessed or modified directly.

// This version of the code is more secure because the private data is truly private and cannot be accessed from outside the closure.


//example:
const obj = {
  message: 'Hello world',
  logMessage(){
    console.log(this.message);
  }
}
//Because settimeout taking this function as callback, but it called as regular function
// and inside the regular function "this" refers to window object

setTimeout(obj.logMessage, 1000);

//Fixed it 
obj.logMessage();

//another way 
setTimeout(() => obj.logMessage(), 1000); //now this function is not called at regular function


function example1(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 + i);
  }
}


function example_1(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 * i);
  }
}

function example2(){
  for (var i = 0; i < 3; i++) {
    setTimeout((function() { 
      console.log(i) 
    })(), 1000 + i);
  }
}

// In this code, the IIFE is still invoked immediately, but the setTimeout function schedules it to be executed after a 1000 millisecond delay. So the console.log statement inside the IIFE will be executed after the delay.




function example3(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function(k) { 
      return function() { console.log(k); } 
    }(i), 1000 + i);
  }  
}

//counter dilemma 
function test(){
  let count = 0;
  function add(){
    count++;
    return count;
  }
  return add;
}

const output = test();
console.log(output);
console.log(output);
console.log(output);

let addition = (() => {
  let count = 0;
  return () =>{
      count = count + 1;
      console.log("count",count);
      return count
  }
})();

console.log(addition());
console.log(addition());
console.log(addition());

// The variable add is assigned to the return value of a self-invoking function.
// The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
// This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
// This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
// The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

// Question 1: Lexical Scoping
function init() {
  var name = 'Uncommon Geeks';
  function displayName() {
      console.log(name);
  }
  displayName(); //*** */
}
init();

// Question 2: Closure
function makeFunc() {
  var name = 'Uncommon Geeks';
  function displayName() {
      console.log(name);
  }
  return displayName; //*** */
}

var myFunc = makeFunc();
console.log(myFunc());

//Lexical scope vs Closure - 
// closure is the mechanism by which a function can access variables in its parent scope even after the parent function has returned, while lexical scope is the set of rules that determine the visibility and accessibility of variables and functions based on their location in the source code.

// Question 3: 
function makeAdder(x) {
  return function (y) {
      return x + y;
  };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); //7
console.log(add10(2)); //12

// Question 4: 
function outside() {
  var x = 5;
  function inside(x) {
      return x * 2;
  }
  return inside;
}

outside()(10);


// Question 5: 
function timeOut() {
  for (var i = 0; i < 3; i++) { //here var is global scope, pointing to same memory location
      setTimeout(function log() {
          console.log(i); // What is logged? 3,3,3
      }, 1000);
  }
}

function timeOut() {
  for (var i = 0; i < 3; i++) { //here var is global scope, pointing to same memory location
      function aa(j){
        setTimeout(function log() {
          console.log(j); 
        }, 1000);
      }
      aa(i);
  }
}

function timeOut() {
  for (let i = 0; i < 3; i++) { //let is block scope, pointing to different memory location 
      setTimeout(function log() {
          console.log(i); // What is logged? 3,3,3
      }, 1000);
  }
}

// Questions 6:
(function immediateA(a) {
  return (function immediateB(b) {
      console.log(a); // What is logged? //0
  })(1);
})(0);

// Questions 7:
function example1(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function() { console.log(i); }, 1000 + i);
  }
}

// Questions 8:
function example2(){
  for (var i = 0; i < 3; i++) {
    setTimeout((function() { 
      console.log(i) 
    })(), 1000 + i);
  }
}

// Questions 9:
function example3(){
  for (var i = 0; i < 3; i++) {
    setTimeout(function(k) { 
      return function() { console.log(k); } 
    }(i), 1000 + i);
  }  
}


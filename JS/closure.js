// A closure is the combination of a function and 
// the lexical environment within which that function was declared. 
// i.e, It is an inner function that has access to the outer or enclosing function’s variables. 

// The closure has three scope chains

// Own scope where variables defined between its curly brackets
// Outer function’s variables
// Global variables

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

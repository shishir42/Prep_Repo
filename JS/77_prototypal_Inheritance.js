// https://dev.to/lydiahallie/javascript-visualized-prototypal-inheritance-47co

// What is the difference between proto and prototype

// In JavaScript, prototype and __proto__ (also known as [[Prototype]]) are both related to the object-oriented programming concept of prototypal inheritance, but they have different meanings and uses.

// prototype is a property of constructor functions. It is an object that contains properties and methods that will be inherited by objects created with the new operator and the constructor function. When you define a function, its prototype object is automatically created and assigned to the function's prototype property.

// Prototype inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects. It is a way to achieve object-oriented programming in JavaScript, without the use of classes.

// In JavaScript, every object has a prototype, which is an object that serves as a template for creating new objects. When a property or method is accessed on an object, JavaScript first looks for it on the object itself. If the property or method is not found on the object, JavaScript looks for it on the object's prototype. If it is still not found, JavaScript looks for it on the prototype's prototype, and so on, until the property or method is found or until the end of the prototype chain is reached.

function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  const john = new Person('John');
  john.greet(); // Output: Hello, my name is John.

  
//   In this example, the Person constructor function has a prototype property that contains the greet method. When you create a new Person object using the new operator, the greet method is inherited from the Person.prototype object.

// __proto__ is a property of every JavaScript object (except for the root object Object.prototype). It refers to the object's parent prototype, which is used to implement prototype chaining. It allows an object to inherit properties and methods from its prototype chain.

const person = {
    name: 'John',
    greet() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  const employee = {
    salary: 50000,
    __proto__: person
  };
  
  employee.greet(); // Output: Hello, my name is John.
  console.log(employee.salary); // Output: 50000

  
// In this example, the person object has a greet method and the employee object has a salary property. The employee object's __proto__ property is set to person, so it inherits the greet method from the person object.

// To summarize, prototype is a property of constructor functions and is used to define properties and methods that will be inherited by objects created with the constructor. __proto__ is a property of every JavaScript object and is used to implement prototype chaining, allowing an object to inherit properties and methods from its prototype chain.

// The __proto__ object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas prototype is the object that is used to build __proto__ when you create an object with new.

// Do all objects have prototypes
// No. All objects have prototypes except for the base object which is created by the user, or an object that is created using the new keyword.
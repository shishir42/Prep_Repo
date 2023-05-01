// Inheritance in JavaScript is a way to create new objects based on existing objects, by inheriting properties and methods from the existing objects. In JavaScript, inheritance is achieved using prototypes.

// define a parent object
var Animal = function(name) {
    this.name = name;
  }
  
  Animal.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
  }
  
  // define a child object that inherits from the parent object
  var Dog = function(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
  }
  
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    console.log("Woof!");
  }
  
  // create a new Dog object and call its methods
  var myDog = new Dog("Buddy", "Golden Retriever");
  myDog.sayHello(); // outputs "Hello, my name is Buddy"
  myDog.bark(); // outputs "Woof!"

  
//   In this example, we define a parent object called Animal using a constructor function. The Animal object has a sayHello method attached to its prototype.

// We then define a child object called Dog using another constructor function. The Dog object inherits from the Animal object using Object.create() to set its prototype to the Animal.prototype. The Dog object also has its own bark method attached to its prototype.

// We create a new Dog object called myDog and call its sayHello and bark methods. When we call myDog.sayHello(), it outputs "Hello, my name is Buddy", showing that the Dog object has inherited the sayHello method from the Animal object. When we call myDog.bark(), it outputs "Woof!", showing that the Dog object has its own bark method.

// In this way, we can use inheritance to create new objects that inherit properties and methods from existing objects, making our code more modular and reusable.

// there are several ways to implement inheritance. Here are some of the most common approaches:
// 1.Prototype-based inheritance:
// This is the most common way to implement inheritance in JavaScript. It involves creating a prototype object that serves as the blueprint for all objects that inherit from it. When a property or method is accessed on an object, JavaScript looks up the prototype chain until it finds the property or method.

function Animal(name) {
  this.name = name;
}

Animal.prototype.sayName = function() {
  console.log("My name is " + this.name);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const dog = new Dog("Fido");
dog.sayName(); // logs "My name is Fido"
dog.bark(); // logs "Woof!"


// 2.Class-based inheritance:
// ES6 introduced class syntax to JavaScript, which makes it easier to create classes and inherit from them. Class-based inheritance is similar to prototype-based inheritance, but with a more familiar syntax.

class Animal {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log("My name is " + this.name);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const dog = new Dog("Fido");
dog.sayName(); // logs "My name is Fido"
dog.bark(); // logs "Woof!"


// 3.Mixins:
// Mixins are a way to add functionality to an object without inheriting from a class or prototype. This is useful when you want to add functionality to multiple objects that don't share a common prototype.

const speaker = {
  speak(text) {
    console.log(text);
  }
};

const writer = {
  write(text) {
    console.log(text);
  }
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, speaker, writer);

const person = new Person("John");
person.speak("Hello world!"); // logs "Hello world!"
person.write("Hello world!"); // logs "Hello world!"


// 4.Functional inheritance:
// Functional inheritance is similar to prototype-based inheritance, but instead of using constructor functions, it uses factory functions that return objects. This is useful when you want to create objects with private properties or methods.

function createAnimal(name) {
  const animal = { name };

  animal.sayName = function() {
    console.log("My name is " + this.name);
  };

  return animal;
}

function createDog(name) {
  const dog = createAnimal(name);

  dog.bark = function() {
    console.log("Woof!");
  };

  return dog;
}

const dog = createDog("Fido");
dog.sayName(); // logs "My name is Fido"
dog.bark(); // logs "Woof!"

// These are some of the common ways to implement inheritance in JavaScript. Each approach has its own advantages and disadvantages, and the choice of which one to use depends on the specific requirements of your code.

// Object-oriented programming (OOP) is a programming paradigm that uses objects and their interactions to design applications. JavaScript is an object-oriented language, and it has several OOP concepts. Here are some of the key OOP concepts in JavaScript with examples:

// Classes and Objects:
// In JavaScript, classes and objects are defined using constructor functions. Here's an example:

// Define a class using a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Create an object from the class
  let john = new Person('John', 30);
  
  // Access the object's properties
  console.log(john.name); // "John"
  console.log(john.age); // 30

  
//   In this example, we define a Person class using a constructor function. The constructor function takes two parameters, name and age, and sets them as properties on the object using the this keyword. We then create an object john from the class using the new keyword.

// Encapsulation:
// Encapsulation is the practice of hiding the internal details of an object from the outside world. In JavaScript, we can use closures to achieve encapsulation. Here's an example:

// Define a class using a closure
function Person(name, age) {
    let _name = name;
    let _age = age;
  
    this.getName = function() {
      return _name;
    };
  
    this.getAge = function() {
      return _age;
    };
  
    this.setName = function(name) {
      _name = name;
    };
  
    this.setAge = function(age) {
      _age = age;
    };
  }
  
  // Create an object from the class
  let john = new Person('John', 30);
  
  // Access the object's properties using getter and setter methods
  console.log(john.getName()); // "John"
  console.log(john.getAge()); // 30
  
  john.setName('Jane');
  john.setAge(35);
  
  console.log(john.getName()); // "Jane"
  console.log(john.getAge()); // 35

  
//   In this example, we define a Person class using a closure. The closure creates private variables _name and _age, which are not accessible from outside the class. We then define getter and setter methods to access and modify these private variables.

// Inheritance:
// Inheritance is the process by which a new class is created from an existing class. In JavaScript, we can use prototype-based inheritance to achieve inheritance. Here's an example:

// Define a base class
function Animal() {}

Animal.prototype.eat = function() {
  console.log('The animal is eating.');
};

// Define a derived class
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log('The dog is barking.');
};

// Create an object from the derived class
let myDog = new Dog();

// Access the object's properties and methods
myDog.eat(); // "The animal is eating."
myDog.bark(); // "The dog is barking."


// Polymorphism:
// Polymorphism is the ability of objects to respond to the same message in different ways. In JavaScript, we can use method overriding to achieve polymorphism. Here's an example:

class Shape {
    constructor(color) {
      this.color = color;
    }
  
    draw() {
      console.log('Drawing a generic shape.');
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}.`);
    }
  }
  
  class Square extends Shape {
    constructor(color, side) {
      super(color);
      this.side = side;
    }
  
    draw() {
      console.log(`Drawing a square with side ${this.side}.`);
    }
  }
  
  let shapes = [
    new Circle('red', 5),
    new Square('blue', 10),
    new Circle('green', 8)
  ];
  
  shapes.forEach(shape => {
    shape.draw();
  });

  
//   In this example, we define a Shape class with a constructor method and a draw method that prints out a generic message. We also define Circle and Square classes that extend the Shape class and override the draw method to draw a specific shape.

// We create an array of shapes that includes two circles and a square. When we iterate over the
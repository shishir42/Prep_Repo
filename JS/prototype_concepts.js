// Prototyping is a core feature of JavaScript that enables the creation of object instances based on a blueprint object. In this way, prototype concepts allow you to define common properties and methods that can be shared across multiple instances of an object.

// 1. Prototype Chain:
// A prototype chain is a sequence of objects linked through their prototypes, starting with an instance's prototype and ending with the Object prototype. When a property or method is accessed on an object, the JavaScript runtime looks up the prototype chain until it finds the property or method. If it's not found, it returns undefined.


//ex1. 
// Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Add a method to the Person constructor's prototype
  Person.prototype.introduce = function() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
  
  // Create a new instance of Person
  const john = new Person('John', 30);
  
  // Call the introduce method on the john instance
  john.introduce(); // Output: "Hi, my name is John and I'm 30 years old."
  
  // Check the prototype chain of the john instance
  console.log(Object.getPrototypeOf(john)); // Output: Person {introduce: ƒ}
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(john))); // Output: Object {}

  //In the example above, we defined a constructor function Person and added a method introduce to its prototype. We then created a new instance of Person and called the introduce method on it. Finally, we used the Object.getPrototypeOf method to check the prototype chain of the john instance.

//ex2. 
// The prototype chain is a sequence of objects linked through their prototypes. When a property or method is accessed on an object, the JavaScript runtime looks up the prototype chain until it finds the property or method. Here's an example:

let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // set rabbit's prototype to animal
  
  console.log(rabbit.eats); // true
  console.log(rabbit.jumps); // true

  
//   In this example, rabbit inherits from animal through its prototype. When we access the eats property on rabbit, the runtime looks up the prototype chain and finds the property on animal.

//2.Constructor Function:
// A constructor function is a function that's used to create new objects. It's called with the new keyword and typically sets up the object's initial state. Constructor functions often define properties and methods on the object's prototype, which is used to share functionality between instances.

// Define a constructor function
function Shape(x, y) {
    this.x = x;
    this.y = y;
  }
  
  // Add a method to the Shape constructor's prototype
  Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
  }
  
  // Define a subclass constructor function
  function Circle(x, y, radius) {
    Shape.call(this, x, y);
    this.radius = radius;
  }
  
  // Set up the Circle prototype chain
  Circle.prototype = Object.create(Shape.prototype);
  Circle.prototype.constructor = Circle;
  
  // Add a method to the Circle constructor's prototype
  Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
  }
  
  // Create a new instance of Circle
  const circle = new Circle(10, 10, 5);
  
  // Call the move and area methods on the circle instance
  circle.move(5, 5);
  console.log(circle.area()); // Output: 78.53981633974483

// In the example above, we defined a constructor function Shape and added a method move to its prototype. We then defined a subclass constructor function Circle that inherits from Shape and added a method area to its prototype. We created a new instance of Circle and called the move and area methods on it.  

//ex2
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
  
  let john1 = new Person('John', 30);
  john1.greet(); // Hello, my name is John.

  
//   In this example, we define a Person constructor function that takes a name and age parameter and sets up the object's state. We also define a greet method on the Person prototype, which is shared across all instances of Person.

//3. Object.create():
// The Object.create() method creates a new object with a specified prototype object and properties. This method allows you to create objects that inherit from a specified prototype object.

// Define a prototype object
const animal1 = {
    type: 'unknown',
    speak: function() {
      console.log(`The ${this.type} speaks.`);
    }
  }
  
  // Create a new object that inherits from the animal prototype
  const dog = Object.create(animal1);
  dog.type = 'dog';
  
  // Call the speak method on the dog object
  dog.speak(); // Output: "The dog speaks."

  // In the example above, we defined a prototype object animal that contains a type property and a speak method. We then created a new object dog that inherits from the animal prototype using the Object.create method. We set the type property of dog to 'dog' and called the speak method on it.

// ex:2
let animal2 = {
    eats: true
  };
  
  let rabbit = Object.create(animal2, {
    jumps: {
      value: true
    }
  });
  
  console.log(rabbit.eats); // true
  console.log(rabbit.jumps); // true

// 4.Prototype-based Inheritance:
// In JavaScript, inheritance is achieved through prototype-based inheritance. This means that objects inherit properties and methods from their prototypes. You can create a new object that inherits from another object's prototype by using the Object.create() method.

// In JavaScript, inheritance is achieved through prototype-based inheritance. Here's an example:
function Animal() {
    this.eats = true;
  }
  
  function Rabbit() {
    this.jumps = true;
  }
  
  Rabbit.prototype = new Animal(); // set Rabbit's prototype to Animal
  
  let rabbit = new Rabbit();
  console.log(rabbit.eats); // true
  console.log(rabbit.jumps); // true
  
//   5.Polymorphism:
// Polymorphism is the ability of objects to respond to the same message in different ways. In JavaScript, you can achieve polymorphism by defining a common method on the prototype of multiple objects. When the method is called on any of those objects, it will execute the same code, but the results may be different depending on the object's state.

// Polymorphism is the ability of objects to respond to the same message in different ways. Here's an example:

function Animal() {}

Animal.prototype.speak = function() {
  console.log('The animal speaks.');
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
  console.log('The dog barks.');
};

let animal = new Animal();
let dog = new Dog();

animal.speak(); // The animal speaks.
dog.speak(); // The dog barks.

// In this example, we define an Animal constructor function and a Dog constructor function that inherits from Animal. We override the speak method on Dog's prototype to make it bark instead of speaking. When we call the speak method on animal and dog objects, they respond differently.

// 6. Mixins:
// Mixins are a way to add functionality to an object without modifying its prototype. A mixin is an object that contains properties and methods that can be added to another object. Mixins can be used to compose functionality from multiple sources and create objects with specific behavior.

// Define a mixin object
let myMixin = {
    foo() {
      console.log('foo');
    },
    bar() {
      console.log('bar');
    }
  };
  
  // Define a constructor function
  function MyClass() {}
  
  // Use Object.assign() to mix in the methods
  Object.assign(MyClass.prototype, myMixin);
  
  // Create an instance of MyClass and call the methods
  let myObj = new MyClass();
  myObj.foo(); // "foo"
  myObj.bar(); // "bar"

//   In this example, we define a mixin object called myMixin that has two methods, foo and bar. We then define a constructor function called MyClass.

// To add the methods from myMixin to the prototype of MyClass, we use the Object.assign() method. This method takes the target object (in this case, MyClass.prototype) and one or more source objects (in this case, myMixin). It copies all the enumerable properties from the source objects to the target object.

// Finally, we create an instance of MyClass and call the foo and bar methods, which were mixed in from the myMixin object.
  
